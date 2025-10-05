import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly ns: NotificationService) {}

  @EventPattern('reminder.trigger')
  async onReminder(@Payload() payload: any) {
    await this.ns.handleReminder(payload);
  }

  @EventPattern('messages.new')
  async onMessage(@Payload() payload: any) {
    await this.ns.handleMessage(payload);
  }
}
