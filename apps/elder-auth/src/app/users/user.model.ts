import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GenderEnum, RoleEnum } from '@prisma-clients/elder-auth';

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
