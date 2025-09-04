import {
  IsString,
  IsStrongPassword,
  ValidateIf,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ValidateIf((o) => !o.email) // required if email is not provided
  @IsString()
  mobileNumber: string;

  @ValidateIf((o) => !o.mobileNumber) // required if mobileNumber is not provided
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
