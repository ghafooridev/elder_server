import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalyzeRequestDto } from './dto/analysis-request.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';
import { AnalyzeVitalsRequestDto } from './dto/analysis-vitals-request.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('assistant/analysis')
export class AnalysisController {
  constructor(private readonly analysis: AnalysisService) {}

  @Post('analyze')
  async analyze(
    @Body() body: AnalyzeRequestDto,
    @Req() req: { user: { id: string } }
  ) {
    const { documentId, userPrompt } = body;
    const requestedBy = req.user?.id;

    // TODO: If/when a profile service exposes age/sex/weight/height, fetch here using requestedBy
    const elderInfo: {
      age?: number;
      sex?: string;
      weight?: number;
      height?: number;
    } = {};

    const analysis = await this.analysis.analyzeDocument(
      documentId,
      elderInfo,
      userPrompt,
      requestedBy
    );
    return analysis;
  }

  @Post('vitals')
  async analyzeVitals(
    @Body() body: AnalyzeVitalsRequestDto,
    @Req() req: { user: { id: string } }
  ) {
    const { vitals, userPrompt, requestedBy } = body;
    const requester = requestedBy || req.user?.id;

    const elderInfo: {
      age?: number;
      sex?: string;
      weight?: number;
      height?: number;
    } = {};

    const analysis = await this.analysis.analyzeVitalsData(
      vitals,
      elderInfo,
      userPrompt,
      requester
    );
    return analysis;
  }

  // NATS Event: consume vitals for analysis
  @EventPattern('vitals.analyze')
  async onVitalsAnalyze(@Payload() payload: any) {
    const { vitals, userPrompt, requestedBy } = payload || {};
    if (!vitals || !userPrompt) return;
    const elderInfo: {
      age?: number;
      sex?: string;
      weight?: number;
      height?: number;
    } = {};
    await this.analysis.analyzeVitalsData(
      vitals,
      elderInfo,
      userPrompt,
      requestedBy
    );
  }
}
