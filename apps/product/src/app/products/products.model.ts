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
  Max,
  Length,
  IsUUID,
  IsDateString,
  ValidateNested,
  ArrayMinSize,
  IsPositive,
  Matches,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum ProductCategory {
  MOBILITY_AIDS = 'MOBILITY_AIDS',
  MEDICAL_EQUIPMENT = 'MEDICAL_EQUIPMENT',
  DAILY_LIVING_AIDS = 'DAILY_LIVING_AIDS',
  SAFETY_SECURITY = 'SAFETY_SECURITY',
  HEALTH_MONITORING = 'HEALTH_MONITORING',
  COMFORT_WELLNESS = 'COMFORT_WELLNESS',
  NUTRITION_SUPPLEMENTS = 'NUTRITION_SUPPLEMENTS',
  PERSONAL_CARE = 'PERSONAL_CARE',
  HOME_MODIFICATIONS = 'HOME_MODIFICATIONS',
  EMERGENCY_RESPONSE = 'EMERGENCY_RESPONSE',
  MEDICATION_MANAGEMENT = 'MEDICATION_MANAGEMENT',
  EXERCISE_THERAPY = 'EXERCISE_THERAPY',
}

export enum AgeGroup {
  SENIOR_60_70 = 'SENIOR_60_70',
  SENIOR_70_80 = 'SENIOR_70_80',
  SENIOR_80_PLUS = 'SENIOR_80_PLUS',
  ALL_AGES = 'ALL_AGES',
}

export class Product {
  @ApiProperty({ description: 'Product ID' })
  id: string;

  @ApiProperty({ description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @ApiPropertyOptional({ description: 'Product description' })
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description?: string;

  @ApiProperty({ enum: ProductCategory, description: 'Product category' })
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @ApiPropertyOptional({ description: 'Product subcategory' })
  @IsOptional()
  @IsString()
  @Length(0, 100)
  subcategory?: string;

  @ApiProperty({ description: 'Product price', type: 'number' })
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'Currency code' })
  @IsString()
  @Length(3, 3)
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency must be a 3-letter uppercase code',
  })
  currency: string;

  @ApiProperty({ description: 'Stock Keeping Unit' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  sku: string;

  @ApiProperty({ description: 'Current stock quantity' })
  @IsInt()
  @Min(0)
  stock: number;

  @ApiProperty({ description: 'Minimum stock threshold' })
  @IsInt()
  @Min(0)
  minStock: number;

  @ApiPropertyOptional({ description: 'Maximum stock capacity' })
  @IsOptional()
  @IsInt()
  @Min(1)
  maxStock?: number;

  @ApiPropertyOptional({ description: 'Product brand' })
  @IsOptional()
  @IsString()
  @Length(0, 100)
  brand?: string;

  @ApiPropertyOptional({ description: 'Product model' })
  @IsOptional()
  @IsString()
  @Length(0, 100)
  model?: string;

  @ApiPropertyOptional({ description: 'Product dimensions' })
  @IsOptional()
  @IsString()
  @Length(0, 200)
  dimensions?: string;

  @ApiPropertyOptional({ description: 'Product weight in kg', type: 'number' })
  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  weight?: number;

  @ApiPropertyOptional({ description: 'Product color' })
  @IsOptional()
  @IsString()
  @Length(0, 50)
  color?: string;

  @ApiPropertyOptional({ description: 'Product material' })
  @IsOptional()
  @IsString()
  @Length(0, 100)
  material?: string;

  @ApiPropertyOptional({
    enum: AgeGroup,
    isArray: true,
    description: 'Target age groups',
  })
  @IsOptional()
  @IsArray()
  @IsEnum(AgeGroup, { each: true })
  ageGroup?: AgeGroup[];

  @ApiPropertyOptional({ description: 'Safety rating' })
  @IsOptional()
  @IsString()
  @Length(0, 100)
  safetyRating?: string;

  @ApiProperty({ description: 'Medical grade product' })
  @IsBoolean()
  medicalGrade: boolean;

  @ApiProperty({ description: 'Requires prescription' })
  @IsBoolean()
  prescriptionRequired: boolean;

  @ApiPropertyOptional({ description: 'Product image URLs', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  images?: string[];

  @ApiPropertyOptional({ description: 'Product video URLs', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  videos?: string[];

  @ApiPropertyOptional({ description: 'Product document URLs', type: [String] })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  documents?: string[];

  @ApiProperty({ description: 'Product is active' })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Product is visible to customers' })
  @IsBoolean()
  isVisible: boolean;

  @ApiProperty({ description: 'Featured product' })
  @IsBoolean()
  isFeatured: boolean;

  @ApiPropertyOptional({ description: 'Shipping weight in kg', type: 'number' })
  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  @IsPositive()
  shippingWeight?: number;

  @ApiPropertyOptional({ description: 'Shipping dimensions' })
  @IsOptional()
  @IsString()
  @Length(0, 200)
  shippingDimensions?: string;

  @ApiProperty({ description: 'Free shipping available' })
  @IsBoolean()
  freeShipping: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  @IsDateString()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @IsDateString()
  updatedAt: Date;
}

export class ProductReview {
  @ApiProperty({ description: 'Review ID' })
  id: string;

  @ApiProperty({ description: 'Product ID' })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ description: 'User ID' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ description: 'Rating (1-5 stars)', minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({ description: 'Review title' })
  @IsOptional()
  @IsString()
  @Length(0, 200)
  title?: string;

  @ApiPropertyOptional({ description: 'Review comment' })
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  comment?: string;

  @ApiProperty({ description: 'Verified purchase' })
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ description: 'Helpful votes count' })
  @IsInt()
  @Min(0)
  helpful: number;

  @ApiProperty({ description: 'Creation timestamp' })
  @IsDateString()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @IsDateString()
  updatedAt: Date;
}
