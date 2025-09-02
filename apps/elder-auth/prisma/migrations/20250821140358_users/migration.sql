-- CreateEnum
CREATE TYPE "public"."GenderEnum" AS ENUM ('MALE', 'FEMALE', 'NONE');

-- CreateEnum
CREATE TYPE "public"."RoleEnum" AS ENUM ('ADMIN', 'ELDER', 'CAREGIVER');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "nationalityCode" TEXT,
    "mobileNumber" TEXT NOT NULL,
    "email" TEXT,
    "gender" "public"."GenderEnum" NOT NULL,
    "role" "public"."RoleEnum" NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nationalityCode_key" ON "public"."User"("nationalityCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
