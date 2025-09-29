import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  Req,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';
import { ProductsService } from './products.service';
import {
  UpdateProductDto,
  CreateProductReviewDto,
  CreateProductWithFilesDto,
} from './dto';
import {
  Product,
  ProductReview,
  ProductCategory,
  AgeGroup,
} from './products.model';
import { User } from 'types/proto/auth';
import {
  ApiCreateProductDocs,
  ApiGetAllProductsDocs,
  ApiGetFeaturedProductsDocs,
  ApiGetProductsByCategoryDocs,
  ApiGetLowStockProductsDocs,
  ApiGetProductBySkuDocs,
  ApiGetProductByIdDocs,
  ApiUpdateProductDocs,
  ApiDeleteProductDocs,
  ApiUpdateStockDocs,
  ApiGetProductStatsDocs,
  ApiCreateProductReviewDocs,
  ApiGetProductReviewsDocs,
} from './api-doc/product.swagger';
import * as multer from 'multer';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateProductDocs()
  async createProduct(
    @Body() createProductDto: CreateProductWithFilesDto,
    @UploadedFiles() files: { images: multer.File[] }
  ): Promise<Product> {
    return this.productsService.createProduct(createProductDto, files);
  }

  @Get()
  @ApiGetAllProductsDocs()
  async findAllProducts(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('category') category?: ProductCategory,
    @Query('ageGroup') ageGroup?: AgeGroup,
    @Query('isActive') isActive?: boolean,
    @Query('isVisible') isVisible?: boolean,
    @Query('isFeatured') isFeatured?: boolean,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('search') search?: string
  ): Promise<Product[]> {
    return this.productsService.findAllProducts({
      skip,
      take,
      category,
      ageGroup,
      isActive,
      isVisible,
      isFeatured,
      minPrice,
      maxPrice,
      search,
    });
  }

  @Get('featured')
  @ApiGetFeaturedProductsDocs()
  async getFeaturedProducts(
    @Query('limit') limit?: number
  ): Promise<Product[]> {
    return this.productsService.getFeaturedProducts(limit);
  }

  @Get('category/:category')
  @ApiGetProductsByCategoryDocs()
  async getProductsByCategory(
    @Param('category') category: ProductCategory,
    @Query('limit') limit?: number
  ): Promise<Product[]> {
    return this.productsService.getProductsByCategory(category, limit);
  }

  @Get('low-stock')
  @UseGuards(AuthGuard)
  @ApiGetLowStockProductsDocs()
  async getLowStockProducts(
    @Query('threshold') threshold?: number
  ): Promise<Product[]> {
    return this.productsService.getLowStockProducts(threshold);
  }

  @Get('sku/:sku')
  @ApiGetProductBySkuDocs()
  async findProductBySku(@Param('sku') sku: string): Promise<Product> {
    return this.productsService.findProductBySku(sku);
  }

  @Get(':id')
  @ApiGetProductByIdDocs()
  async findProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.findProductById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiUpdateProductDocs()
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Req() req: { user: User }
  ): Promise<Product> {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiDeleteProductDocs()
  async deleteProduct(@Param('id') id: string): Promise<{ message: string }> {
    await this.productsService.deleteProduct(id);
    return { message: 'Product deleted successfully' };
  }

  @Put(':id/stock')
  @UseGuards(AuthGuard)
  @ApiUpdateStockDocs()
  async updateStock(
    @Param('id') id: string,
    @Body('quantity', ParseIntPipe) quantity: number
  ): Promise<Product> {
    return this.productsService.updateStock(id, quantity);
  }

  @Get(':id/stats')
  @UseGuards(AuthGuard)
  @ApiGetProductStatsDocs()
  async getProductStats(@Param('id') id: string, @Req() req: { user: User }) {
    return this.productsService.getProductStats(id);
  }

  @Post(':id/reviews')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateProductReviewDocs()
  async createProductReview(
    @Param('id') productId: string,
    @Body() createReviewDto: CreateProductReviewDto,
    @Req() req: { user: User }
  ): Promise<ProductReview> {
    createReviewDto.productId = productId;
    createReviewDto.userId = req.user?.id;
    return this.productsService.createProductReview(createReviewDto);
  }

  @Get(':id/reviews')
  @ApiGetProductReviewsDocs()
  async getProductReviews(
    @Param('id') productId: string,
    @Query('skip') skip?: number,
    @Query('take') take?: number
  ): Promise<ProductReview[]> {
    return this.productsService.getProductReviews(productId, { skip, take });
  }
}
