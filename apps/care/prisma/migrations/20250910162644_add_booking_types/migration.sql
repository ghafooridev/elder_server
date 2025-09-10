/*
  Warnings:

  - You are about to drop the column `clientId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Care` table. All the data in the column will be lost.
  - Added the required column `bookerId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `elderId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caregiverId` to the `Care` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Booking" DROP COLUMN "clientId",
ADD COLUMN     "bookerId" TEXT NOT NULL,
ADD COLUMN     "elderId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Care" DROP COLUMN "providerId",
ADD COLUMN     "caregiverId" TEXT NOT NULL;
