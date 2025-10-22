import { Injectable, Logger, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  MulticastMessage,
  BatchResponse,
} from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(@Inject('AUTH_CLIENT') private readonly authClient: ClientProxy) {
    try {
      if (!admin.apps.length) {
        const sa = process.env.FIREBASE_SA_JSON;
        if (!sa) {
          this.logger.warn(
            '⚠️ FIREBASE_SA_JSON is not set. FCM will be disabled.'
          );
          return;
        }

        const parsed = JSON.parse(sa);
        if (!parsed.project_id || !parsed.private_key || !parsed.client_email) {
          throw new Error('Invalid FIREBASE_SA_JSON content.');
        }

        admin.initializeApp({
          credential: admin.credential.cert(parsed),
        });

        this.logger.log('✅ Firebase Admin initialized successfully.');
      }
    } catch (err) {
      this.logger.error('❌ Failed to initialize Firebase Admin', err);
    }
  }

  private isInvalidTokenError(error: any): boolean {
    const errorCode = error?.errorInfo?.code;
    return (
      errorCode === 'messaging/invalid-registration-token' ||
      errorCode === 'messaging/registration-token-not-registered'
    );
  }

  private async getDeviceTokens(userId: string): Promise<string[]> {
    try {
      const tokens = await firstValueFrom(
        this.authClient.send<string[]>('auth.devices.getTokens', { userId })
      );
      return Array.isArray(tokens) ? tokens : [];
    } catch (e) {
      this.logger.error(`Failed to fetch device tokens for user ${userId}`, e);
      return [];
    }
  }

  private async sendMulticastFcm(
    tokens: string[],
    title: string,
    body: string,
    data?: Record<string, string>
  ): Promise<BatchResponse | null> {
    if (!admin.apps.length) {
      this.logger.warn('⚠️ Firebase Admin not initialized.');
      return null;
    }

    if (tokens.length === 0) {
      this.logger.warn('⚠️ No tokens provided for sendMulticastFcm.');
      return null;
    }

    try {
      const message: MulticastMessage = {
        tokens,
        notification: { title, body },
        data,
      };

      this.logger.debug(
        `📤 Sending FCM multicast message: ${JSON.stringify(message, null, 2)}`
      );

      const response = await admin.messaging().sendEachForMulticast(message);

      this.logger.log(
        `✅ FCM sent: ${response.successCount} success, ${response.failureCount} failure(s)`
      );

      response.responses.forEach((res, idx) => {
        if (res.success) {
          this.logger.debug(`✅ Sent to token[${idx}] ${tokens[idx]}`);
        } else {
          this.logger.warn(
            `❌ Failed token[${idx}] ${tokens[idx]}: ${res.error?.message}`
          );
          if (this.isInvalidTokenError(res.error)) {
            this.authClient.emit('auth.devices.unregister', {
              token: tokens[idx],
            });
          }
        }
      });

      return response;
    } catch (error) {
      this.logger.error('❌ Error in sendMulticastFcm()', error);
      return null;
    }
  }

  async handleReminder(payload: any) {
    this.logger.log('🕒 handleReminder triggered:', payload);

    const { userId, id: reminderId, title } = payload || {};
    if (!userId) return;

    const tokens = await this.getDeviceTokens(userId);
    this.logger.log(
      `Sending reminder to user ${userId} tokens: ${tokens.length}`
    );

    const response = await this.sendMulticastFcm(
      tokens,
      title ?? 'Reminder',
      title ?? 'You have a reminder',
      {
        reminderId: String(reminderId ?? ''),
        type: 'reminder',
      }
    );

    if (!response) {
      this.logger.debug(
        'Reminder results: ⚠️ No response received from Firebase.'
      );
    } else {
      this.logger.debug(
        `Reminder results:\n${JSON.stringify(response, null, 2)}`
      );
    }
    console.log(response);
    return response;
  }

  async handleMessage(payload: any) {
    this.logger.log('💬 handleMessage triggered:', payload);

    const { toUserId, fromUserId, text, messageId } = payload || {};
    if (!toUserId) return;

    const tokens = await this.getDeviceTokens(toUserId);
    this.logger.log(
      `Sending message to user ${toUserId} tokens: ${tokens.length}`
    );

    const response = await this.sendMulticastFcm(
      tokens,
      'New message',
      text ?? '',
      {
        messageId: String(messageId ?? ''),
        fromUserId: String(fromUserId ?? ''),
        type: 'message',
      }
    );

    if (!response) {
      this.logger.debug(
        'Message results: ⚠️ No response received from Firebase.'
      );
    } else {
      this.logger.debug(
        `Message results:\n${JSON.stringify(response, null, 2)}`
      );
    }

    return response;
  }
}
