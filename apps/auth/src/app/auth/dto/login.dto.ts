import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsStrongPassword,
  IsEmail,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

export class LoginDto {
  @ValidateIf((o) => !o.email)
  @IsString()
  @IsNotEmpty({ message: 'Either email or mobileNumber is required' })
  @ApiProperty({
    example: '09123456789',
    description: 'Mobile number of the user',
    required: false,
  })
  mobileNumber: string;

  @ValidateIf((o) => !o.mobileNumber)
  @IsNotEmpty({ message: 'Either email or mobileNumber is required' })
  @IsEmail()
  @ApiProperty({
    example: 'ali@gmail.com',
    description: 'Email of the user',
    required: false,
  })
  email: string;

  @IsString()
  @IsStrongPassword()
  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;
}
