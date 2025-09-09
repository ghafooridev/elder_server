import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareDto } from './dto/create-care.dto';
import { UpdateCareDto } from './dto/update-care.dto';
import { Care } from './care.model';

@Injectable()
export class CareService {
  constructor(private readonly prisma: PrismaService) {}

  async createCare(data: CreateCareDto): Promise<Care> {
    const care = await this.prisma.care.create({
      data,
    });

    return care;
  }

  async updateCare(id: string, data: UpdateCareDto): Promise<Care> {
    if (!id) {
      throw new BadRequestException('Care ID is required');
    }

    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    const updatedCare = await this.prisma.care.update({
      where: { id },
      data,
    });

    return updatedCare;
  }

  async deleteCare(id: string): Promise<{ message: string }> {
    if (!id) {
      throw new BadRequestException('Care ID is required');
    }

    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    await this.prisma.care.delete({ where: { id } });

    return { message: 'Care deleted successfully' };
  }

  async getCares(): Promise<Care[]> {
    return this.prisma.care.findMany();
  }

  async getCare(id: string): Promise<Care> {
    const care = await this.prisma.care.findUnique({ where: { id } });

    if (!care) {
      throw new NotFoundException('Care not found');
    }

    return care;
  }
}
