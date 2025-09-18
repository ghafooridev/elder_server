import {
  IsString,
  IsOptional,
  IsInt,
  IsBoolean,
  IsNotEmpty,
  Min,
  Max,
  Length,
} from 'class-validator';

export class CreateProductReviewDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  title?: string;

  @IsOptional()
  @IsString()
  @Length(0, 2000)
  comment?: string;

  @IsOptional()
  @IsBoolean()
  verified?: boolean = false;
}
