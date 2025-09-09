import { IsString, IsOptional } from 'class-validator';

export class UpdateCareCategoryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
