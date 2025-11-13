import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class AnalyzeVitalsRequestDto {
  @ApiProperty({
    description: 'Vitals JSON payload from IoT device',
    example: { deviceId: 'elder_dev_9707', heartRate: 70.4 },
  })
  @IsObject()
  @IsNotEmpty()
  vitals!: Record<string, any>;

  @ApiProperty({
    description: 'Model to use for analysis',
    example: 'deepseek/deepseek-chat-v3.1:free',
  })
  @IsString()
  @IsNotEmpty()
  model!: string;

  @ApiProperty({
    description: 'Prompt for the analysis',
    example:
      'Analyze this wearable vital and provide elderly-specific risks and short recommendations.',
  })
  @IsString()
  @IsNotEmpty()
  userPrompt!: string;

  @ApiProperty({ description: 'User ID who requested the analysis' })
  @IsString()
  @IsOptional()
  requestedBy?: string;
}
