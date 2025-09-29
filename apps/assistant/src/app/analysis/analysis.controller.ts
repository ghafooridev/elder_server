import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalyzeRequestDto } from './dto/analysis-request.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';

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
    const { documentId, model, userPrompt } = body;
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
      model,
      userPrompt,
      requestedBy
    );
    return analysis;
  }
}
