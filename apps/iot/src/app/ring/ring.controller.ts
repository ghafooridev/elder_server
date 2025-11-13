import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RingService } from './ring.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';
import { CreateVitalDto, QueryHistoryDto, QueryLatestDto } from './dto';
import { CreateRingDeviceDto } from './dto';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('ring')
@Controller('ring')
export class RingController {
  constructor(private readonly ring: RingService) {}

  // Register a ring device to the authenticated user
  @Post('device/register')
  async registerDevice(
    @Body() dto: CreateRingDeviceDto,
    @Req() req: { user: { id: string } }
  ) {
    const userId = req.user?.id;
    return this.ring.registerRingDevice(userId, dto.deviceId, dto.label);
  }

  // List my registered devices
  @Get('device')
  async myDevices(@Req() req: { user: { id: string } }) {
    const userId = req.user?.id;
    return this.ring.getMyDevices(userId);
  }

  // On-demand tracking: create one vital record and publish
  @Post('vital')
  async createVital(
    @Body() dto: CreateVitalDto,
    @Req() req: { user: { id: string } }
  ) {
    const userId = req.user?.id;
    return this.ring.createOnDemandVital(userId, dto);
  }

  // Get latest one object for a device
  @Get('vital/latest')
  async getLatest(@Query() query: QueryLatestDto) {
    return this.ring.getLatest(query.deviceId);
  }

  // Get last N objects for history
  @Get('vital/history')
  async getHistory(@Query() query: QueryHistoryDto) {
    return this.ring.getHistory(query.deviceId, query.limit);
  }
}
