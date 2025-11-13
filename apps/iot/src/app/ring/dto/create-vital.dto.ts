import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVitalDto {
  @ApiProperty({ example: 'elder_dev_9707' })
  @IsString()
  deviceId!: string;

  @ApiProperty({ example: '2024-04-01T00:00:00', required: false })
  @IsOptional()
  @IsDateString()
  timestamp?: string;

  @IsOptional()
  @IsNumber()
  heartRate?: number;
  @IsOptional()
  @IsNumber()
  bloodOxygen?: number;
  @IsOptional()
  @IsNumber()
  bodyTemp?: number;
  @IsOptional()
  @IsNumber()
  respRate?: number;
  @IsOptional()
  @IsNumber()
  hrv?: number;
  @IsOptional()
  @IsNumber()
  stressLevel?: number;

  @IsOptional()
  @IsNumber()
  stepCount?: number;
  @IsOptional()
  @IsString()
  activity?: string;
  @IsOptional()
  @IsNumber()
  activityDuration?: number;

  @IsOptional()
  @IsNumber()
  accelX?: number;
  @IsOptional()
  @IsNumber()
  accelY?: number;
  @IsOptional()
  @IsNumber()
  accelZ?: number;
  @IsOptional()
  @IsNumber()
  gyroX?: number;
  @IsOptional()
  @IsNumber()
  gyroY?: number;
  @IsOptional()
  @IsNumber()
  gyroZ?: number;
  @IsOptional()
  @IsNumber()
  motionIntensity?: number;

  @IsOptional()
  @IsString()
  sleepPattern?: string;
  @IsOptional()
  @IsNumber()
  sleepScore?: number;
  @IsOptional()
  @IsNumber()
  anomalyScore?: number;
  @IsOptional()
  @IsNumber()
  signalNoiseLevel?: number;
  @IsOptional()
  @IsNumber()
  dataIntegrityScore?: number;

  @IsOptional()
  @IsNumber()
  batteryLevel?: number;
  @IsOptional()
  @IsNumber()
  ambientTemp?: number;
  @IsOptional()
  @IsNumber()
  humidity?: number;
  @IsOptional()
  @IsBoolean()
  isTampered?: boolean;

  @IsOptional()
  @IsNumber()
  locationLat?: number;
  @IsOptional()
  @IsNumber()
  locationLon?: number;
  @IsOptional()
  @IsNumber()
  altitude?: number;
}
