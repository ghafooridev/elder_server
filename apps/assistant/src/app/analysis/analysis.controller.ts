import { Controller, Post, Body } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { AnalyzeRequestDto } from './dto/analysis-request.dto';

@Controller('assistant/analysis')
export class AnalysisController {
  constructor(private readonly analysis: AnalysisService) {}

  @Post('analyze')
  async analyze(@Body() body: AnalyzeRequestDto) {
    const { documentId, model, userPrompt, requestedBy } = body;
    const analysis = await this.analysis.analyzeDocument(
      documentId,
      model,
      userPrompt,
      requestedBy
    );
    return analysis;
  }
}
