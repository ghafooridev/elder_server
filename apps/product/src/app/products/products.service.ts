import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
import { Prisma } from '@prisma-clients/product';
import { FILE_SERVICE_NAME } from 'types/proto/file';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { FileServiceClient } from 'types/proto/file';
import * as multer from 'multer';

@Injectable()
export class ProductsService {
  private readonly fileService: FileServiceClient;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(FILE_SERVICE_NAME) private readonly client: ClientGrpc
  ) {
    this.fileService =
      this.client.getService<FileServiceClient>(FILE_SERVICE_NAME);
  }

  async createProduct(
    createProductDto: CreateProductWithFilesDto,
    files: { images?: multer.File[] }
  ): Promise<Product> {
    try {
      // Check if SKU already exists
      const existingSku = await this.prisma.product.findUnique({
        where: { sku: createProductDto.sku },
      });
      if (existingSku) {
        throw new ConflictException(
          `Product with SKU '${createProductDto.sku}' already exists`
        );
      }

      // Upload files if any
      let imagesUrls: string[] = [];
      if (files?.images?.length) {
        console.log(files.images);
        const uploadPromises = files.images.map((file) =>
          lastValueFrom(
            this.fileService.uploadFile({
              fileName: file.originalname,
              fileData: file.buffer,
            })
          ).catch((err) => {
            console.error('File service error:', err);
            throw new BadRequestException('Failed to upload file.');
          })
        );
        const results = await Promise.all(uploadPromises);
        console.log(results);
        imagesUrls = results.map((r) => r.fileUrl);
      }

      const product = await this.prisma.product.create({
        data: {
          ...createProductDto,
          images: imagesUrls,
          price: new Prisma.Decimal(createProductDto.price),
          weight: createProductDto.weight
            ? new Prisma.Decimal(createProductDto.weight)
            : null,
          shippingWeight: createProductDto.shippingWeight
            ? new Prisma.Decimal(createProductDto.shippingWeight)
            : null,
        },
        include: { reviews: true, orders: true },
      });

      return this.mapToProduct(product);
    } catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new BadRequestException('Failed to create product');
    }
  }

  async findAllProducts(params?: {
    skip?: number;
    take?: number;
    category?: ProductCategory;
    ageGroup?: AgeGroup;
    isActive?: boolean;
    isVisible?: boolean;
    isFeatured?: boolean;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }): Promise<Product[]> {
    const {
      skip = 0,
      take = 50,
      category,
      ageGroup,
      isActive,
      isVisible,
      isFeatured,
      minPrice,
      maxPrice,
      search,
    } = params || {};

    const where: Prisma.ProductWhereInput = {};

    if (category) where.category = category;
    if (ageGroup) where.ageGroup = { has: ageGroup };
    if (isActive !== undefined) where.isActive = isActive;
    if (isVisible !== undefined) where.isVisible = isVisible;
    if (isFeatured !== undefined) where.isFeatured = isFeatured;

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined)
        where.price.gte = new Prisma.Decimal(minPrice);
      if (maxPrice !== undefined)
        where.price.lte = new Prisma.Decimal(maxPrice);
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } },
      ];
    }

    const products = await this.prisma.product.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        reviews: true,
        orders: true,
      },
    });

    return products.map((product) => this.mapToProduct(product));
  }

  async findProductById(id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        reviews: {
          orderBy: { createdAt: 'desc' },
        },
        orders: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }

    return this.mapToProduct(product);
  }

  async findProductBySku(sku: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { sku },
      include: {
        reviews: true,
        orders: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with SKU '${sku}' not found`);
    }

    return this.mapToProduct(product);
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    // Check if product exists
    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }

    try {
      const product = await this.prisma.product.update({
        where: { id },
        data: {
          ...updateProductDto,
          price: updateProductDto.price
            ? new Prisma.Decimal(updateProductDto.price)
            : undefined,
          weight: updateProductDto.weight
            ? new Prisma.Decimal(updateProductDto.weight)
            : undefined,
          shippingWeight: updateProductDto.shippingWeight
            ? new Prisma.Decimal(updateProductDto.shippingWeight)
            : undefined,
        },
        include: {
          reviews: true,
          orders: true,
        },
      });

      return this.mapToProduct(product);
    } catch (error) {
      throw new BadRequestException('Failed to update product');
    }
  }

  async deleteProduct(id: string): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }

    try {
      await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Failed to delete product');
    }
  }

  async updateStock(id: string, quantity: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }

    if (quantity < 0) {
      throw new BadRequestException('Stock quantity cannot be negative');
    }

    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: { stock: quantity },
      include: {
        reviews: true,
        orders: true,
      },
    });

    return this.mapToProduct(updatedProduct);
  }

  async getFeaturedProducts(limit = 10): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isFeatured: true,
        isActive: true,
        isVisible: true,
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        reviews: true,
        orders: true,
      },
    });

    return products.map((product) => this.mapToProduct(product));
  }

  async getProductsByCategory(
    category: ProductCategory,
    limit = 20
  ): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        category,
        isActive: true,
        isVisible: true,
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        reviews: true,
        orders: true,
      },
    });

    return products.map((product) => this.mapToProduct(product));
  }

  async getLowStockProducts(threshold?: number): Promise<Product[]> {
    // Get all active products and filter in application logic since Prisma doesn't support field comparisons easily
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
      },
      orderBy: { stock: 'asc' },
      include: {
        reviews: true,
        orders: true,
      },
    });

    // Filter products that are low stock based on threshold or minStock
    const lowStockProducts = products.filter((product) => {
      const stockThreshold = threshold || 10;
      return (
        product.stock <= stockThreshold ||
        (product.minStock > 0 && product.stock <= product.minStock)
      );
    });

    return lowStockProducts.map((product) => this.mapToProduct(product));
  }

  // Product Reviews
  async createProductReview(
    createReviewDto: CreateProductReviewDto
  ): Promise<ProductReview> {
    // Check if product exists
    const product = await this.prisma.product.findUnique({
      where: { id: createReviewDto.productId },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with ID '${createReviewDto.productId}' not found`
      );
    }

    try {
      const review = await this.prisma.productReview.create({
        data: createReviewDto,
      });

      return this.mapToProductReview(review);
    } catch (error) {
      throw new BadRequestException('Failed to create product review');
    }
  }

  async getProductReviews(
    productId: string,
    params?: {
      skip?: number;
      take?: number;
    }
  ): Promise<ProductReview[]> {
    const { skip = 0, take = 20 } = params || {};

    const reviews = await this.prisma.productReview.findMany({
      where: { productId },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });

    return reviews.map((review) => this.mapToProductReview(review));
  }

  async getProductStats(productId: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        reviews: true,
        orders: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID '${productId}' not found`);
    }

    const totalReviews = product.reviews.length;
    const averageRating =
      totalReviews > 0
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          totalReviews
        : 0;

    const totalOrders = product.orders.reduce(
      (sum, order) => sum + order.quantity,
      0
    );

    return {
      productId,
      totalReviews,
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      totalOrders,
      currentStock: product.stock,
      isLowStock: product.stock <= product.minStock,
    };
  }

  private mapToProduct(product: any): Product {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      price: Number(product.price),
      currency: product.currency,
      sku: product.sku,
      stock: product.stock,
      minStock: product.minStock,
      maxStock: product.maxStock,
      brand: product.brand,
      model: product.model,
      dimensions: product.dimensions,
      weight: product.weight ? Number(product.weight) : undefined,
      color: product.color,
      material: product.material,
      ageGroup: product.ageGroup,
      safetyRating: product.safetyRating,
      medicalGrade: product.medicalGrade,
      prescriptionRequired: product.prescriptionRequired,
      images: product.images,
      videos: product.videos,
      documents: product.documents,
      isActive: product.isActive,
      isVisible: product.isVisible,
      isFeatured: product.isFeatured,
      shippingWeight: product.shippingWeight
        ? Number(product.shippingWeight)
        : undefined,
      shippingDimensions: product.shippingDimensions,
      freeShipping: product.freeShipping,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }

  private mapToProductReview(review: any): ProductReview {
    return {
      id: review.id,
      productId: review.productId,
      userId: review.userId,
      rating: review.rating,
      title: review.title,
      comment: review.comment,
      verified: review.verified,
      helpful: review.helpful,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    };
  }
}
