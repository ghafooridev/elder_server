-- CreateEnum
CREATE TYPE "public"."DocumentType" AS ENUM ('BLOOD_REPORT', 'LAB_REPORT', 'PRESCRIPTION', 'INVOICE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('PENDING', 'PROCESSING', 'SUCCESS', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "public"."AnalysisStatus" AS ENUM ('PENDING', 'PROCESSING', 'DONE', 'FAILED');

-- CreateTable
CREATE TABLE "public"."Document" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "caregiverId" TEXT,
    "fileServiceId" TEXT,
    "fileUrl" TEXT NOT NULL,
    "fileName" TEXT,
    "mimeType" TEXT,
    "size" INTEGER,
    "type" "public"."DocumentType" NOT NULL DEFAULT 'OTHER',
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProcessingJob" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "status" "public"."JobStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "processor" TEXT,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessingJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OcrResult" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "rawJson" JSONB NOT NULL,
    "plainText" TEXT NOT NULL,
    "language" TEXT,
    "pages" INTEGER,
    "confidence" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OcrResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Analysis" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "ocrResultId" TEXT,
    "model" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" JSONB NOT NULL,
    "summary" TEXT,
    "insights" JSONB,
    "vitals" JSONB,
    "graphs" JSONB,
    "status" "public"."AnalysisStatus" NOT NULL DEFAULT 'PENDING',
    "confidence" DOUBLE PRECISION,
    "requestedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VitalParam" (
    "id" TEXT NOT NULL,
    "analysisId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT,
    "recordedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VitalParam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentShare" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "caregiverId" TEXT NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3),
    "viewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Document_userId_idx" ON "public"."Document"("userId");

-- CreateIndex
CREATE INDEX "Document_caregiverId_idx" ON "public"."Document"("caregiverId");

-- CreateIndex
CREATE INDEX "Document_fileServiceId_idx" ON "public"."Document"("fileServiceId");

-- CreateIndex
CREATE INDEX "ProcessingJob_documentId_status_idx" ON "public"."ProcessingJob"("documentId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "OcrResult_documentId_key" ON "public"."OcrResult"("documentId");

-- CreateIndex
CREATE INDEX "Analysis_documentId_idx" ON "public"."Analysis"("documentId");

-- CreateIndex
CREATE INDEX "Analysis_requestedBy_idx" ON "public"."Analysis"("requestedBy");

-- CreateIndex
CREATE INDEX "VitalParam_analysisId_name_idx" ON "public"."VitalParam"("analysisId", "name");

-- CreateIndex
CREATE INDEX "DocumentShare_documentId_idx" ON "public"."DocumentShare"("documentId");

-- CreateIndex
CREATE INDEX "DocumentShare_caregiverId_idx" ON "public"."DocumentShare"("caregiverId");

-- AddForeignKey
ALTER TABLE "public"."ProcessingJob" ADD CONSTRAINT "ProcessingJob_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OcrResult" ADD CONSTRAINT "OcrResult_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Analysis" ADD CONSTRAINT "Analysis_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Analysis" ADD CONSTRAINT "Analysis_ocrResultId_fkey" FOREIGN KEY ("ocrResultId") REFERENCES "public"."OcrResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VitalParam" ADD CONSTRAINT "VitalParam_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "public"."Analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentShare" ADD CONSTRAINT "DocumentShare_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
