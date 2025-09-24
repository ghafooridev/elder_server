-- CreateEnum
CREATE TYPE "public"."GenderEnum" AS ENUM ('MALE', 'FEMALE', 'NONE');

-- CreateEnum
CREATE TYPE "public"."RoleEnum" AS ENUM ('ADMIN', 'ELDER', 'RELATIVE', 'CAREGIVER');

-- CreateEnum
CREATE TYPE "public"."CaregiverType" AS ENUM ('CAREGIVER', 'NURSE', 'DOCTOR', 'PHYSIOTHERAPIST', 'OTHER');

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
    "bloodType" TEXT,
    "medicalConditions" TEXT[],
    "allergies" TEXT[],
    "medications" TEXT[],
    "disability" TEXT,
    "mobilityStatus" TEXT,
    "cognitiveStatus" TEXT,
    "maritalStatus" TEXT,
    "occupation" TEXT,
    "languages" TEXT[],
    "religion" TEXT,
    "dietaryNeeds" TEXT,
    "emergencyContactName" TEXT,
    "emergencyContactPhone" TEXT,
    "emergencyContactRelation" TEXT,

    CONSTRAINT "Elder_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Caregiver" (
    "userId" TEXT NOT NULL,
    "caregiverType" "public"."CaregiverType" NOT NULL,
    "specialization" TEXT,
    "licenseNumber" TEXT,
    "experienceYears" INTEGER,
    "languages" TEXT[],
    "available" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Relative" (
    "userId" TEXT NOT NULL,
    "relationshipToElder" TEXT NOT NULL,
    "elderId" TEXT NOT NULL,

    CONSTRAINT "Relative_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_mobileNumber_idx" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Relative_elderId_idx" ON "public"."Relative"("elderId");

-- AddForeignKey
ALTER TABLE "public"."Elder" ADD CONSTRAINT "Elder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relative" ADD CONSTRAINT "Relative_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relative" ADD CONSTRAINT "Relative_elderId_fkey" FOREIGN KEY ("elderId") REFERENCES "public"."Elder"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
