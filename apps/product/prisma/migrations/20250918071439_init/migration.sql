-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('MOBILITY_AIDS', 'MEDICAL_EQUIPMENT', 'DAILY_LIVING_AIDS', 'SAFETY_SECURITY', 'HEALTH_MONITORING', 'COMFORT_WELLNESS', 'NUTRITION_SUPPLEMENTS', 'PERSONAL_CARE', 'HOME_MODIFICATIONS', 'EMERGENCY_RESPONSE', 'MEDICATION_MANAGEMENT', 'EXERCISE_THERAPY');

-- CreateEnum
CREATE TYPE "public"."AgeGroup" AS ENUM ('SENIOR_60_70', 'SENIOR_70_80', 'SENIOR_80_PLUS', 'ALL_AGES');

-- CreateTable
CREATE TABLE "public"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "public"."ProductCategory" NOT NULL,
    "subcategory" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "sku" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "minStock" INTEGER NOT NULL DEFAULT 0,
    "maxStock" INTEGER,
    "brand" TEXT,
    "model" TEXT,
    "dimensions" TEXT,
    "weight" DECIMAL(8,2),
    "color" TEXT,
    "material" TEXT,
    "ageGroup" "public"."AgeGroup"[],
    "safetyRating" TEXT,
    "medicalGrade" BOOLEAN NOT NULL DEFAULT false,
    "prescriptionRequired" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "videos" TEXT[],
    "documents" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "shippingWeight" DECIMAL(8,2),
    "shippingDimensions" TEXT,
    "freeShipping" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_reviews" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "title" TEXT,
    "comment" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "helpful" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."order_items" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "public"."products"("sku");

-- AddForeignKey
ALTER TABLE "public"."product_reviews" ADD CONSTRAINT "product_reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
