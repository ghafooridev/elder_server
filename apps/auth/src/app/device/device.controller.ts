import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DevicesService } from './device.service';
import { RegisterDeviceDto } from './dto/register-device.dto';

@Controller()
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @MessagePattern('auth.devices.getTokens')
  async getTokens(@Payload() data: { userId: string }): Promise<string[]> {
    const { userId } = data || {};
    if (!userId) return [];
    return this.devicesService.findActiveTokensByUserId(userId);
  }

  @MessagePattern('auth.devices.register')
  async register(@Payload() data: RegisterDeviceDto): Promise<void> {
    await this.devicesService.registerDevice(data);
  }
}
