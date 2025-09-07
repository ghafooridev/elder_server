-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "password" TEXT,
ALTER COLUMN "mobileNumber" DROP NOT NULL,
ALTER COLUMN "gender" SET DEFAULT 'NONE',
ALTER COLUMN "role" SET DEFAULT 'ELDER';
