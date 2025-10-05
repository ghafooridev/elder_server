import { DevicePlatform } from '@prisma-clients/auth';

export class RegisterDeviceDto {
  userId: string;
  token: string;
  platform: DevicePlatform;
}
