import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class AnalyzeRequestDto {
  @ApiProperty({ description: 'ID of the document to analyze' })
  @IsString()
  @IsNotEmpty()
  documentId!: string;

  @ApiProperty({
    description: 'Model to use for analysis',
    example: 'Qwen/Qwen2.5-7B-Instruct',
  })
  @IsString()
  @IsNotEmpty()
  model!: string;

  @ApiProperty({
    description: 'User prompt or instruction for the analysis',
    example: 'Summarize key risks and give actionable recommendations.',
  })
  @IsString()
  @IsNotEmpty()
  userPrompt!: string;

  @ApiProperty({ description: 'User ID who requested the analysis' })
  @IsString()
  @IsOptional()
  requestedBy?: string;
}
