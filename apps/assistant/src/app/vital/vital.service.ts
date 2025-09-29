import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVitalDto, BulkCreateVitalDto, UpdateVitalDto } from './dto';

@Injectable()
export class VitalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(analysisId: string, dto: CreateVitalDto) {
    // ensure analysis exists
    const analysis = await this.prisma.analysis.findUnique({
      where: { id: analysisId },
    });
    if (!analysis) throw new NotFoundException('Analysis not found');

    return this.prisma.vitalParam.create({
      data: {
        analysisId,
        name: dto.name,
        value: dto.value,
        unit: dto.unit ?? null,
        recordedAt: dto.recordedAt ? new Date(dto.recordedAt) : null,
        metadata: dto.metadata
          ? JSON.parse(JSON.stringify(dto.metadata))
          : undefined,
      },
    });
  }

  async bulkCreate(analysisId: string, dto: BulkCreateVitalDto) {
    const analysis = await this.prisma.analysis.findUnique({
      where: { id: analysisId },
    });
    if (!analysis) throw new NotFoundException('Analysis not found');

    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('No vital items provided');
    }

    const data = dto.items.map((item) => ({
      analysisId,
      name: item.name,
      value: item.value,
      unit: item.unit ?? null,
      recordedAt: item.recordedAt ? new Date(item.recordedAt) : null,
      metadata: item.metadata
        ? JSON.parse(JSON.stringify(item.metadata))
        : undefined,
    }));

    await this.prisma.vitalParam.createMany({ data });

    // return created list by analysis
    return this.getByAnalysis(analysisId);
  }

  async getById(id: string) {
    const vital = await this.prisma.vitalParam.findUnique({ where: { id } });
    if (!vital) throw new NotFoundException('Vital not found');
    return vital;
  }

  async getByAnalysis(analysisId: string) {
    return this.prisma.vitalParam.findMany({
      where: { analysisId },
      orderBy: { recordedAt: 'asc' },
    });
  }

  async update(id: string, dto: UpdateVitalDto) {
    const exists = await this.prisma.vitalParam.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Vital not found');

    return this.prisma.vitalParam.update({
      where: { id },
      data: {
        name: dto.name ?? undefined,
        value: dto.value ?? undefined,
        unit: dto.unit ?? undefined,
        recordedAt: dto.recordedAt ? new Date(dto.recordedAt) : undefined,
        metadata: dto.metadata
          ? JSON.parse(JSON.stringify(dto.metadata))
          : undefined,
      },
    });
  }

  async remove(id: string) {
    const exists = await this.prisma.vitalParam.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Vital not found');
    await this.prisma.vitalParam.delete({ where: { id } });
    return { message: 'Vital deleted successfully' };
  }
}
