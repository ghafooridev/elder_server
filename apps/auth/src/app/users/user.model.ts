import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GenderEnum, RoleEnum, CaregiverType } from '@prisma-clients/auth';

export class Elder {
  @ApiPropertyOptional({ description: 'Blood type of the elder' })
  bloodType: string | null;

  @ApiPropertyOptional({ description: 'List of medical conditions' })
  medicalConditions: string[];

  @ApiPropertyOptional({ description: 'List of allergies' })
  allergies: string[];

  @ApiPropertyOptional({ description: 'List of current medications' })
  medications: string[];

  @ApiPropertyOptional({ description: 'Any disabilities' })
  disability: string | null;

  @ApiPropertyOptional({ description: 'Mobility status' })
  mobilityStatus: string | null;

  @ApiPropertyOptional({ description: 'Cognitive status' })
  cognitiveStatus: string | null;

  @ApiPropertyOptional({ description: 'Marital status' })
  maritalStatus: string | null;

  @ApiPropertyOptional({ description: 'Occupation before retirement' })
  occupation: string | null;

  @ApiPropertyOptional({ description: 'Languages spoken' })
  languages: string[];

  @ApiPropertyOptional({ description: 'Religion' })
  religion: string | null;

  @ApiPropertyOptional({ description: 'Dietary needs' })
  dietaryNeeds: string | null;

  @ApiPropertyOptional({ description: 'Emergency contact name' })
  emergencyContactName: string | null;

  @ApiPropertyOptional({ description: 'Emergency contact phone' })
  emergencyContactPhone: string | null;

  @ApiPropertyOptional({ description: 'Emergency contact relation' })
  emergencyContactRelation: string | null;
}

export class Caregiver {
  @ApiProperty({ enum: CaregiverType, description: 'Type of caregiver' })
  caregiverType: CaregiverType;

  @ApiPropertyOptional({ description: 'Specialization of the caregiver' })
  specialization: string | null;

  @ApiPropertyOptional({
    description: 'License number for certified caregivers',
  })
  licenseNumber: string | null;

  @ApiPropertyOptional({ description: 'Years of experience' })
  experienceYears: number | null;

  @ApiPropertyOptional({ description: 'Languages spoken' })
  languages: string[];

  @ApiProperty({ description: 'Availability of the caregiver' })
  available: boolean;
}

export class Relative {
  @ApiProperty({ description: 'Relationship to the elder' })
  relationshipToElder: string;

  @ApiProperty({ description: 'ID of the related elder' })
  elderId: string;
}

export class User {
  @ApiProperty({
    description: 'Unique identifier of the user',
    example: 'a1b2c3d4',
  })
  readonly id: string;

  @ApiPropertyOptional({
    description: 'First name of the user',
    example: 'Ali',
  })
  firstName: string | null;

  @ApiPropertyOptional({
    description: 'Last name of the user',
    example: 'Ghafoori',
  })
  lastName: string | null;

  @ApiProperty({
    description: 'Mobile number of the user',
    example: '+989123456789',
  })
  mobileNumber: string;

  @ApiPropertyOptional({
    description: 'Email address of the user',
    example: 'user@example.com',
  })
  email: string | null;

  @ApiPropertyOptional({
    description: 'Hashed password of the user',
    example: '$2b$10$abc...',
  })
  password: string | null;

  @ApiPropertyOptional({
    description: 'National identity code of the user',
    example: '1234567890',
  })
  nationalityCode: string | null;

  @ApiProperty({
    enum: GenderEnum,
    description: 'Gender of the user',
    example: GenderEnum.MALE,
  })
  gender: GenderEnum;

  @ApiProperty({
    enum: RoleEnum,
    description: 'Role assigned to the user',
    example: RoleEnum.ADMIN,
  })
  role: RoleEnum;

  @ApiPropertyOptional({
    description: 'Date of birth of the user',
    type: String,
    format: 'date-time',
    example: '1995-01-15T00:00:00Z',
  })
  dateOfBirth: Date | null;

  @ApiProperty({
    description: 'Indicates if the user account is enabled',
    example: true,
  })
  enabled: boolean;

  @ApiProperty({
    description: 'Avatar of the user',
    example: 'https://example.com/avatar.jpg',
  })
  avatar: string | null;

  @ApiPropertyOptional({ type: () => Elder })
  elder?: Elder | null;

  @ApiPropertyOptional({ type: () => Caregiver })
  caregiver?: Caregiver | null;

  @ApiPropertyOptional({ type: () => Relative })
  relative?: Relative | null;

  @ApiProperty({
    description: 'Date when the user was created',
    type: String,
    format: 'date-time',
    example: '2025-09-04T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the user was last updated',
    type: String,
    format: 'date-time',
    example: '2025-09-04T13:00:00Z',
  })
  updatedAt: Date;
}
