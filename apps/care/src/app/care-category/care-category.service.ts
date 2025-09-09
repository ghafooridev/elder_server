import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareCategoryDto } from './dto/create-care-category.dto';
import { UpdateCareCategoryDto } from './dto/update-care-category.dto';
import { CareCategory } from './care-category.model';

@Injectable()
export class CareCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCareCategory(data: CreateCareCategoryDto): Promise<CareCategory> {
    const careCategory = await this.prisma.careCategory.create({
      data,
    });

    return careCategory;
  }

  async updateCareCategory(
    id: string,
    data: UpdateCareCategoryDto
  ): Promise<CareCategory> {
    if (!id) {
      throw new BadRequestException('Care category ID is required');
    }

    const careCategory = await this.prisma.careCategory.findUnique({
      where: { id },
    });

    if (!careCategory) {
      throw new NotFoundException('Care category not found');
    }

    const updatedCareCategory = await this.prisma.careCategory.update({
      where: { id },
      data,
    });

    return updatedCareCategory;
  }

  async deleteCareCategory(id: string): Promise<{ message: string }> {
    if (!id) {
      throw new BadRequestException('Care category ID is required');
    }

    const careCategory = await this.prisma.careCategory.findUnique({
      where: { id },
    });

    if (!careCategory) {
      throw new NotFoundException('Care category not found');
    }

    await this.prisma.careCategory.delete({ where: { id } });

    return { message: 'Care category deleted successfully' };
  }

  async getCareCategories(): Promise<CareCategory[]> {
    return this.prisma.careCategory.findMany();
  }

  async getCareCategory(id: string): Promise<CareCategory> {
    const careCategory = await this.prisma.careCategory.findUnique({
      where: { id },
    });

    if (!careCategory) {
      throw new NotFoundException('Care category not found');
    }

    return careCategory;
  }
}
