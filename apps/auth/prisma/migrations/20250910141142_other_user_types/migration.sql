/*
  Warnings:

  - You are about to drop the column `MSN` on the `Caregiver` table. All the data in the column will be lost.
  - You are about to drop the column `disease` on the `Elder` table. All the data in the column will be lost.
  - You are about to drop the column `drugAllergy` on the `Elder` table. All the data in the column will be lost.
  - Added the required column `caregiverType` to the `Caregiver` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."CaregiverType" AS ENUM ('CAREGIVER', 'NURSE', 'DOCTOR', 'PHYSIOTHERAPIST', 'OTHER');

-- AlterEnum
ALTER TYPE "public"."RoleEnum" ADD VALUE 'RELATIVE';

-- DropIndex
DROP INDEX "public"."Caregiver_MSN_key";

-- AlterTable
ALTER TABLE "public"."Caregiver" DROP COLUMN "MSN",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "caregiverType" "public"."CaregiverType" NOT NULL,
ADD COLUMN     "experienceYears" INTEGER,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "licenseNumber" TEXT,
ADD COLUMN     "specialization" TEXT;

-- AlterTable
ALTER TABLE "public"."Elder" DROP COLUMN "disease",
DROP COLUMN "drugAllergy",
ADD COLUMN     "allergies" TEXT[],
ADD COLUMN     "bloodType" TEXT,
ADD COLUMN     "cognitiveStatus" TEXT,
ADD COLUMN     "dietaryNeeds" TEXT,
ADD COLUMN     "disability" TEXT,
ADD COLUMN     "emergencyContactName" TEXT,
ADD COLUMN     "emergencyContactPhone" TEXT,
ADD COLUMN     "emergencyContactRelation" TEXT,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "maritalStatus" TEXT,
ADD COLUMN     "medicalConditions" TEXT[],
ADD COLUMN     "medications" TEXT[],
ADD COLUMN     "mobilityStatus" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "religion" TEXT;

-- CreateTable
CREATE TABLE "public"."Relative" (
    "userId" TEXT NOT NULL,
    "relationshipToElder" TEXT NOT NULL,
    "elderId" TEXT NOT NULL,

    CONSTRAINT "Relative_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "Relative_elderId_idx" ON "public"."Relative"("elderId");

-- AddForeignKey
ALTER TABLE "public"."Relative" ADD CONSTRAINT "Relative_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relative" ADD CONSTRAINT "Relative_elderId_fkey" FOREIGN KEY ("elderId") REFERENCES "public"."Elder"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
