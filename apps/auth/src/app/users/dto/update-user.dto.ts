import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsInt,
  IsBoolean,
  IsArray,
  IsDateString,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CaregiverType, GenderEnum, RoleEnum } from '@prisma-clients/auth';

class UpdateElderDto {
  @IsOptional()
  @IsString()
  bloodType?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  medicalConditions?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  medications?: string[];

  @IsOptional()
  @IsString()
  disability?: string;

  @IsOptional()
  @IsString()
  mobilityStatus?: string;

  @IsOptional()
  @IsString()
  cognitiveStatus?: string;

  @IsOptional()
  @IsString()
  maritalStatus?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @IsOptional()
  @IsString()
  religion?: string;

  @IsOptional()
  @IsString()
  dietaryNeeds?: string;

  @IsOptional()
  @IsString()
  emergencyContactName?: string;

  @IsOptional()
  @IsString()
  emergencyContactPhone?: string;

  @IsOptional()
  @IsString()
  emergencyContactRelation?: string;
}

class UpdateCaregiverDto {
  @IsOptional()
  @IsEnum(CaregiverType)
  caregiverType?: CaregiverType;

  @IsOptional()
  @IsString()
  specialization?: string;

  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @IsOptional()
  @IsInt()
  experienceYears?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}

class UpdateRelativeDto {
  @IsOptional()
  @IsString()
  relationshipToElder?: string;

  @IsOptional()
  @IsString()
  elderId?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum(RoleEnum)
  role?: RoleEnum;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  nationalityCode?: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateElderDto)
  elder?: UpdateElderDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCaregiverDto)
  caregiver?: UpdateCaregiverDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateRelativeDto)
  relative?: UpdateRelativeDto;
}
