import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDeviceDto } from './dto/register-device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  async findActiveTokensByUserId(userId: string): Promise<string[]> {
    const activeTokens = await this.prisma.deviceToken.findMany({
      where: {
        userId,
        isActive: true,
      },
      select: {
        token: true,
      },
    });

    return activeTokens.map((t) => t.token);
  }

  async registerDevice(data: RegisterDeviceDto): Promise<void> {
    const { userId, token, platform } = data;

    await this.prisma.deviceToken.upsert({
      where: { token },
      update: {
        userId,
        platform,
        isActive: true,
        lastSeen: new Date(),
      },
      create: {
        userId,
        token,
        platform,
      },
    });
  }

  async deactivateDevice(token: string): Promise<void> {
    await this.prisma.deviceToken.updateMany({
      where: { token },
      data: {
        isActive: false,
      },
    });
  }
}
