import {
  IsString,
  IsStrongPassword,
  IsEmail,
  IsOptional,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @ValidateIf((o) => !o.email)
  @IsString()
  @IsNotEmpty({ message: 'Either email or mobileNumber is required' })
  mobileNumber: string;

  @ValidateIf((o) => !o.mobileNumber)
  @IsNotEmpty({ message: 'Either email or mobileNumber is required' })
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
