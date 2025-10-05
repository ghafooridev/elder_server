import { Injectable, Logger, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(@Inject('AUTH_CLIENT') private readonly authClient: ClientProxy) {
    try {
      if (!admin.apps.length) {
        const sa = process.env.FIREBASE_SA_JSON;
        if (!sa) {
          this.logger.warn(
            'FIREBASE_SA_JSON is not set. FCM will be disabled.'
          );
          return;
        }
        admin.initializeApp({
          credential: admin.credential.cert(JSON.parse(sa)),
        });
        this.logger.log('Firebase Admin initialized.');
      }
    } catch (err) {
      this.logger.error('Failed to initialize Firebase Admin', err as any);
    }
  }

  async sendFcm(
    token: string,
    title: string,
    body: string,
    data?: Record<string, string>
  ) {
    if (!admin.apps.length) return;
    try {
      const message = {
        token,
        notification: { title, body },
        data,
      };
      return await admin.messaging().send(message);
    } catch (error) {
      this.logger.error(`Failed to send FCM to token ${token}`, error);
      if (this.isInvalidTokenError(error)) {
        this.authClient.emit('auth.devices.unregister', { token });
      }
    }
  }

  private isInvalidTokenError(error: any): boolean {
    const errorCode = error?.errorInfo?.code;
    return (
      errorCode === 'messaging/invalid-registration-token' ||
      errorCode === 'messaging/registration-token-not-registered'
    );
  }

  // Fetch device tokens from auth service via NATS request-reply
  private async getDeviceTokens(userId: string): Promise<string[]> {
    try {
      const tokens = await firstValueFrom(
        this.authClient.send<string[]>('auth.devices.getTokens', { userId })
      );
      return Array.isArray(tokens) ? tokens : [];
    } catch (e) {
      this.logger.error(
        `Failed to fetch device tokens for user ${userId}`,
        e as any
      );
      return [];
    }
  }

  async handleReminder(payload: any) {
    const { userId, id: reminderId, title } = payload || {};
    if (!userId) return;

    const tokens = await this.getDeviceTokens(userId);
    await Promise.all(
      tokens.map((t) =>
        this.sendFcm(t, title ?? 'Reminder', title ?? 'You have a reminder', {
          reminderId: String(reminderId ?? ''),
          type: 'reminder',
        })
      )
    );
  }

  async handleMessage(payload: any) {
    const { toUserId, fromUserId, text, messageId } = payload || {};
    if (!toUserId) return;

    const tokens = await this.getDeviceTokens(toUserId);
    await Promise.all(
      tokens.map((t) =>
        this.sendFcm(t, 'New message', text ?? '', {
          messageId: String(messageId ?? ''),
          fromUserId: String(fromUserId ?? ''),
          type: 'message',
        })
      )
    );
  }
}
