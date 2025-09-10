import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsArray,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RoleEnum, GenderEnum, CaregiverType } from '@prisma-clients/auth';

class CreateElderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bloodType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  medicalConditions?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  medications?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  disability?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobilityStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cognitiveStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  maritalStatus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  occupation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  religion?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dietaryNeeds?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  emergencyContactName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  emergencyContactPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  emergencyContactRelation?: string;
}

class CreateCaregiverDto {
  @ApiProperty({ enum: CaregiverType })
  @IsEnum(CaregiverType)
  caregiverType: CaregiverType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  specialization?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  experienceYears?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  available?: boolean;
}

class CreateRelativeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  relationshipToElder: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  elderId: string;
}

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ enum: RoleEnum })
  @IsEnum(RoleEnum)
  role: RoleEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nationalityCode?: string;

  @ApiPropertyOptional({ enum: GenderEnum })
  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @ApiPropertyOptional({ type: () => CreateElderDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateElderDto)
  elder?: CreateElderDto;

  @ApiPropertyOptional({ type: () => CreateCaregiverDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCaregiverDto)
  caregiver?: CreateCaregiverDto;

  @ApiPropertyOptional({ type: () => CreateRelativeDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateRelativeDto)
  relative?: CreateRelativeDto;
}
