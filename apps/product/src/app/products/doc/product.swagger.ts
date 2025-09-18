import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiNoContentResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  CreateProductDto,
  UpdateProductDto,
  CreateProductReviewDto,
} from '../dto';
import { ProductCategory, AgeGroup } from '../products.model';

export function ApiCreateProductDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Create a new product' }),
    ApiBody({ type: CreateProductDto }),
    ApiResponse({ status: 201, description: 'Product created successfully' }),
    ApiBadRequestResponse({ description: 'Bad request' }),
    ApiConflictResponse({ description: 'SKU already exists' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiGetAllProductsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all products with optional filtering' }),
    ApiQuery({
      name: 'skip',
      required: false,
      type: Number,
      description: 'Number of products to skip',
    }),
    ApiQuery({
      name: 'take',
      required: false,
      type: Number,
      description: 'Number of products to take',
    }),
    ApiQuery({
      name: 'category',
      required: false,
      enum: ProductCategory,
      description: 'Filter by category',
    }),
    ApiQuery({
      name: 'ageGroup',
      required: false,
      enum: AgeGroup,
      description: 'Filter by age group',
    }),
    ApiQuery({
      name: 'isActive',
      required: false,
      type: Boolean,
      description: 'Filter by active status',
    }),
    ApiQuery({
      name: 'isVisible',
      required: false,
      type: Boolean,
      description: 'Filter by visibility',
    }),
    ApiQuery({
      name: 'isFeatured',
      required: false,
      type: Boolean,
      description: 'Filter by featured status',
    }),
    ApiQuery({
      name: 'minPrice',
      required: false,
      type: Number,
      description: 'Minimum price filter',
    }),
    ApiQuery({
      name: 'maxPrice',
      required: false,
      type: Number,
      description: 'Maximum price filter',
    }),
    ApiQuery({
      name: 'search',
      required: false,
      type: String,
      description: 'Search in name, description, brand, or SKU',
    }),
    ApiResponse({ status: 200, description: 'Products retrieved successfully' })
  );
}

export function ApiGetFeaturedProductsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get featured products' }),
    ApiQuery({
      name: 'limit',
      required: false,
      type: Number,
      description: 'Number of featured products to return',
    }),
    ApiResponse({
      status: 200,
      description: 'Featured products retrieved successfully',
    })
  );
}

export function ApiGetProductsByCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get products by category' }),
    ApiParam({
      name: 'category',
      enum: ProductCategory,
      description: 'Product category',
    }),
    ApiQuery({
      name: 'limit',
      required: false,
      type: Number,
      description: 'Number of products to return',
    }),
    ApiResponse({
      status: 200,
      description: 'Products by category retrieved successfully',
    })
  );
}

export function ApiGetLowStockProductsDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Get products with low stock' }),
    ApiQuery({
      name: 'threshold',
      required: false,
      type: Number,
      description: 'Stock threshold (default: 10)',
    }),
    ApiResponse({
      status: 200,
      description: 'Low stock products retrieved successfully',
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiGetProductBySkuDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get product by SKU' }),
    ApiParam({ name: 'sku', type: String, description: 'Product SKU' }),
    ApiResponse({ status: 200, description: 'Product retrieved successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' })
  );
}

export function ApiGetProductByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get product by ID' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiResponse({ status: 200, description: 'Product retrieved successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' })
  );
}

export function ApiUpdateProductDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Update product by ID' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiBody({ type: UpdateProductDto }),
    ApiResponse({ status: 200, description: 'Product updated successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' }),
    ApiConflictResponse({ description: 'SKU already exists' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiDeleteProductDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Delete product by ID' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiNoContentResponse({ description: 'Product deleted successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiUpdateStockDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Update product stock' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          quantity: { type: 'number', minimum: 0 },
        },
        required: ['quantity'],
      },
    }),
    ApiResponse({ status: 200, description: 'Stock updated successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' }),
    ApiBadRequestResponse({ description: 'Invalid stock quantity' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiGetProductStatsDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Get product statistics' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiResponse({
      status: 200,
      description: 'Product statistics retrieved successfully',
      schema: {
        type: 'object',
        properties: {
          productId: { type: 'string' },
          totalReviews: { type: 'number' },
          averageRating: { type: 'number' },
          totalOrders: { type: 'number' },
          currentStock: { type: 'number' },
          isLowStock: { type: 'boolean' },
        },
      },
    }),
    ApiNotFoundResponse({ description: 'Product not found' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiCreateProductReviewDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Create a product review' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiBody({ type: CreateProductReviewDto }),
    ApiResponse({ status: 201, description: 'Review created successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' }),
    ApiBadRequestResponse({ description: 'Bad request' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  );
}

export function ApiGetProductReviewsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get product reviews' }),
    ApiParam({ name: 'id', type: String, description: 'Product ID' }),
    ApiQuery({
      name: 'skip',
      required: false,
      type: Number,
      description: 'Number of reviews to skip',
    }),
    ApiQuery({
      name: 'take',
      required: false,
      type: Number,
      description: 'Number of reviews to take',
    }),
    ApiResponse({ status: 200, description: 'Reviews retrieved successfully' }),
    ApiNotFoundResponse({ description: 'Product not found' })
  );
}
