-- CreateEnum
CREATE TYPE "public"."REMINDER_STATUS" AS ENUM ('PENDING', 'COMPLETED', 'MISSED');

-- CreateEnum
CREATE TYPE "public"."REMINDER_TYPE" AS ENUM ('MEDICINE', 'APPOINTMENT', 'VITALS', 'WORKOUT', 'MEAL', 'HYDRATION', 'SLEEP', 'WEIGHT', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Reminder" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "status" "public"."REMINDER_STATUS" NOT NULL DEFAULT 'PENDING',
    "type" "public"."REMINDER_TYPE" NOT NULL DEFAULT 'OTHER',
    "date" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Reminder_title_idx" ON "public"."Reminder"("title");
