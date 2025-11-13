import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVitalDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { Server } from 'socket.io';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RingService {
  private readonly logger = new Logger(RingService.name);
  private ioServer?: Server;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy
  ) {}

  setServer(server: Server) {
    this.ioServer = server;
  }

  async registerRingDevice(userId: string, deviceId: string, label?: string) {
    const existing = await this.prisma.ringDevice.findUnique({
      where: { deviceId },
    });
    if (existing) {
      if (existing.userId !== userId) {
        throw new Error('Device already registered to another user');
      }
      if (label && label !== existing.label) {
        return this.prisma.ringDevice.update({
          where: { deviceId },
          data: { label },
        });
      }
      return existing;
    }
    return this.prisma.ringDevice.create({
      data: { deviceId, userId, label },
    });
  }

  async getMyDevices(userId: string) {
    return this.prisma.ringDevice.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createOnDemandVital(userId: string, dto: CreateVitalDto): Promise<any> {
    // Ensure device registered and owned by user
    let ringDevice = await this.prisma.ringDevice.findUnique({
      where: { deviceId: dto.deviceId },
    });
    if (!ringDevice) {
      ringDevice = await this.prisma.ringDevice.create({
        data: { deviceId: dto.deviceId, userId },
      });
    } else if (ringDevice.userId !== userId) {
      throw new Error('Device belongs to another user');
    }

    const created = await this.prisma.vitalRecord.create({
      data: {
        timestamp: dto.timestamp ? new Date(dto.timestamp) : new Date(),
        deviceId: dto.deviceId,
        userId,
        ringDeviceId: ringDevice.id,
        heartRate: dto.heartRate,
        bloodOxygen: dto.bloodOxygen,
        bodyTemp: dto.bodyTemp,
        respRate: dto.respRate,
        hrv: dto.hrv,
        stressLevel: dto.stressLevel,
        stepCount: dto.stepCount,
        activity: dto.activity,
        activityDuration: dto.activityDuration,
        accelX: dto.accelX,
        accelY: dto.accelY,
        accelZ: dto.accelZ,
        gyroX: dto.gyroX,
        gyroY: dto.gyroY,
        gyroZ: dto.gyroZ,
        motionIntensity: dto.motionIntensity,
        sleepPattern: dto.sleepPattern,
        sleepScore: dto.sleepScore,
        anomalyScore: dto.anomalyScore,
        signalNoiseLevel: dto.signalNoiseLevel,
        dataIntegrityScore: dto.dataIntegrityScore,
        batteryLevel: dto.batteryLevel,
        ambientTemp: dto.ambientTemp,
        humidity: dto.humidity,
        isTampered: dto.isTampered ?? false,
        locationLat: dto.locationLat,
        locationLon: dto.locationLon,
        altitude: dto.altitude,
      },
    });

    // Emit realtime event
    this.emitVital(dto.deviceId, created);

    // Publish to Assistant for analysis (optional, best-effort)
    await this.publishToAssistant(userId, created).catch((err) =>
      this.logger.warn(`Assistant publish failed: ${err?.message}`)
    );

    return created;
  }

  private emitVital(deviceId: string, payload: any) {
    if (!this.ioServer) return;
    this.ioServer.to(this.roomForDevice(deviceId)).emit('vital', payload);
    this.ioServer.emit('vitalBroadcast', payload); // global feed if needed
  }

  roomForDevice(deviceId: string) {
    return `device:${deviceId}`;
  }

  async getLatest(deviceId: string) {
    return this.prisma.vitalRecord.findFirst({
      where: { deviceId },
      orderBy: { timestamp: 'desc' },
    });
  }

  async getHistory(deviceId: string, limit = 20) {
    return this.prisma.vitalRecord.findMany({
      where: { deviceId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    });
  }

  private async publishToAssistant(userId: string, record: any) {
    const userPrompt =
      this.config.get<string>('VITALS_ANALYZE_PROMPT') ??
      'Analyze this wearable vital and provide elderly-specific risks and short recommendations.';

    // Fire-and-forget event for assistant microservice
    this.natsClient.emit('vitals.analyze', {
      vitals: record,
      userPrompt,
      requestedBy: userId,
    });
  }
}
