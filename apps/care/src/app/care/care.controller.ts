import { CareService } from './care.service';
import { CreateCareDto, UpdateCareDto } from './dto';
import { Care } from './care.model';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs';
import {
  ApiCreateCareDocs,
  ApiUpdateCareDocs,
  ApiDeleteCareDocs,
  ApiGetAllCareDocs,
  ApiGetCareDocsById,
} from './doc/care.swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cares')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('cares')
export class CareController {
  constructor(private readonly careService: CareService) {}

  @Post()
  @ApiCreateCareDocs()
  async createCare(
    @Body() createCareDto: CreateCareDto,
    @Req() req: any
  ): Promise<Care> {
    const caregiverId = req.user.id;
    return this.careService.createCare(createCareDto, caregiverId);
  }

  @Patch(':careId')
  @ApiUpdateCareDocs()
  async update(
    @Param('careId') careId: string,
    @Body() updateCareDto: UpdateCareDto
  ): Promise<Care> {
    return this.careService.updateCare(careId, updateCareDto);
  }

  @Delete(':careId')
  @ApiDeleteCareDocs()
  async delete(@Param('careId') careId: string): Promise<{ message: string }> {
    await this.careService.deleteCare(careId);
    return { message: 'Care deleted successfully' };
  }

  @Get()
  @ApiGetAllCareDocs()
  async getAll(@Query('caregiverId') caregiverId?: string): Promise<Care[]> {
    return this.careService.getCares(caregiverId);
  }

  @Get(':careId')
  @ApiGetCareDocsById()
  async get(@Param('careId') careId: string): Promise<Care> {
    return this.careService.getCare(careId);
  }
}
