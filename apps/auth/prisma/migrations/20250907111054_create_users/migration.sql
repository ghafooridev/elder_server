-- CreateEnum
CREATE TYPE "public"."GenderEnum" AS ENUM ('MALE', 'FEMALE', 'NONE');

-- CreateEnum
CREATE TYPE "public"."RoleEnum" AS ENUM ('ADMIN', 'ELDER', 'CAREGIVER');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "avatar" TEXT,
    "nationalityCode" TEXT,
    "mobileNumber" TEXT,
    "email" TEXT,
    "password" TEXT,
    "gender" "public"."GenderEnum" NOT NULL DEFAULT 'NONE',
    "role" "public"."RoleEnum" NOT NULL DEFAULT 'ELDER',
    "dateOfBirth" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Elder" (
    "userId" TEXT NOT NULL,
    "drugAllergy" TEXT[],
    "disease" TEXT[],

    CONSTRAINT "Elder_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Caregiver" (
    "userId" TEXT NOT NULL,
    "MSN" TEXT NOT NULL,

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nationalityCode_key" ON "public"."User"("nationalityCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_mobileNumber_idx" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_MSN_key" ON "public"."Caregiver"("MSN");

-- AddForeignKey
ALTER TABLE "public"."Elder" ADD CONSTRAINT "Elder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
