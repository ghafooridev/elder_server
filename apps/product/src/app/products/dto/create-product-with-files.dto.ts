import {
  IsString,
  IsOptional,
  IsEnum,
  IsDecimal,
  IsInt,
  IsBoolean,
  IsArray,
  IsNotEmpty,
  Min,
  Length,
  IsPositive,
  Matches,
  IsNumber,
} from 'class-validator';
import { ProductCategory, AgeGroup } from '../products.model';
import * as multer from 'multer';
import { Type } from 'class-transformer';

export class CreateProductWithFilesDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description?: string;

  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  subcategory?: string;

  // Pricing
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency must be a 3-letter uppercase code',
  })
  currency?: string = 'USD';

  // Inventory
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  sku: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number = 0;

  @IsOptional()
  @IsInt()
  @Min(0)
  minStock?: number = 0;

  @IsOptional()
  @IsInt()
  @Min(1)
  maxStock?: number;

  // Product details
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

  // Elder care specific
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
  medicalGrade?: boolean = false;

  @IsOptional()
  @IsBoolean()
  prescriptionRequired?: boolean = false;

  // Status and visibility
  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  isVisible?: boolean = true;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean = false;

  // Shipping
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
  freeShipping?: boolean = false;

  // File uploads - these will be handled separately in the controller
  imageFiles?: multer.File[];
  videoFiles?: multer.File[];
  documentFiles?: multer.File[];
}
