import {
  IsString,
  IsOptional,
  IsEnum,
  IsDecimal,
  IsInt,
  IsBoolean,
  IsArray,
  IsUrl,
  IsNotEmpty,
  Min,
  Length,
  IsPositive,
  Matches,
} from 'class-validator';
import { ProductCategory, AgeGroup } from '../products.model';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description?: string;

  @IsOptional()
  @IsEnum(ProductCategory)
  category?: ProductCategory;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  subcategory?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  @Matches(/^[A-Z]{3}$/)
  currency?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  minStock?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  maxStock?: number;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  brand?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  model?: string;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  dimensions?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  weight?: number;

  @IsOptional()
  @IsString()
  @Length(0, 50)
  color?: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  material?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(AgeGroup, { each: true })
  ageGroup?: AgeGroup[];

  @IsOptional()
  @IsString()
  @Length(0, 100)
  safetyRating?: string;

  @IsOptional()
  @IsBoolean()
  medicalGrade?: boolean;

  @IsOptional()
  @IsBoolean()
  prescriptionRequired?: boolean;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  images?: string[];

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  videos?: string[];

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  documents?: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isVisible?: boolean;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  shippingWeight?: number;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  shippingDimensions?: string;

  @IsOptional()
  @IsBoolean()
  freeShipping?: boolean;
}
