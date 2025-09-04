/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

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
CREATE UNIQUE INDEX "Caregiver_MSN_key" ON "public"."Caregiver"("MSN");

-- CreateIndex
CREATE INDEX "User_mobileNumber_idx" ON "public"."User"("mobileNumber");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Elder" ADD CONSTRAINT "Elder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
