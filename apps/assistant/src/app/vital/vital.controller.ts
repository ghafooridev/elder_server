import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';
import { VitalService } from './vital.service';
import { CreateVitalDto, BulkCreateVitalDto, UpdateVitalDto } from './dto';
import {
  ApiCreateVitalDocs,
  ApiBulkCreateVitalDocs,
  ApiGetVitalByIdDocs,
  ApiGetVitalsByAnalysisDocs,
  ApiUpdateVitalDocs,
  ApiDeleteVitalDocs,
} from './api-doc/vital.swagger';

@ApiTags('/assistant/vitals')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('assistant/vitals')
export class VitalController {
  constructor(private readonly vitalService: VitalService) {}

  @Post(':analysisId')
  @ApiCreateVitalDocs()
  async createVital(
    @Param('analysisId') analysisId: string,
    @Body() dto: CreateVitalDto
  ) {
    return this.vitalService.create(analysisId, dto);
  }

  @Post(':analysisId/bulk')
  @ApiBulkCreateVitalDocs()
  async bulkCreate(
    @Param('analysisId') analysisId: string,
    @Body() dto: BulkCreateVitalDto
  ) {
    return this.vitalService.bulkCreate(analysisId, dto);
  }

  @Get(':id')
  @ApiGetVitalByIdDocs()
  async getById(@Param('id') id: string) {
    return this.vitalService.getById(id);
  }

  @Get('analysis/:analysisId')
  @ApiGetVitalsByAnalysisDocs()
  async getByAnalysis(@Param('analysisId') analysisId: string) {
    return this.vitalService.getByAnalysis(analysisId);
  }

  @Patch(':id')
  @ApiUpdateVitalDocs()
  async update(@Param('id') id: string, @Body() dto: UpdateVitalDto) {
    return this.vitalService.update(id, dto);
  }

  @Delete(':id')
  @ApiDeleteVitalDocs()
  async remove(@Param('id') id: string) {
    return this.vitalService.remove(id);
  }
}
