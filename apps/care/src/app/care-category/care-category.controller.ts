import { CareCategoryService } from './care-category.service';
import { CreateCareCategoryDto } from './dto/create-care-category.dto';
import { UpdateCareCategoryDto } from './dto/update-care-category.dto';
import { CareCategory } from './care-category.model';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs';
import {
  ApiCreateCareCategoryDocs,
  ApiUpdateCareCategoryDocs,
  ApiDeleteCareCategoryDocs,
  ApiGetAllCareCategoriesDocs,
} from './doc/care-category.swagger';

@Controller('care-categories')
export class CareCategoryController {
  constructor(private readonly careCategoryService: CareCategoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreateCareCategoryDocs()
  async create(
    @Body() createCareCategoryDto: CreateCareCategoryDto
  ): Promise<CareCategory> {
    return this.careCategoryService.createCareCategory(createCareCategoryDto);
  }

  @Patch(':id')
  @ApiUpdateCareCategoryDocs()
  async update(
    @Param('id') id: string,
    @Body() updateCareCategoryDto: UpdateCareCategoryDto
  ): Promise<CareCategory> {
    return this.careCategoryService.updateCareCategory(
      id,
      updateCareCategoryDto
    );
  }

  @Delete(':id')
  @ApiDeleteCareCategoryDocs()
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.careCategoryService.deleteCareCategory(id);
    return { message: 'Care category deleted successfully' };
  }

  @Get()
  // @UseGuards(AuthGuard)
  @ApiGetAllCareCategoriesDocs()
  async getAll(): Promise<CareCategory[]> {
    return this.careCategoryService.getCareCategories();
  }
}
