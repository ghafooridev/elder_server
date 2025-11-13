-- CreateTable
CREATE TABLE "public"."RingDevice" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "label" TEXT,
    "status" TEXT,
    "lastSeen" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RingDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VitalRecord" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "deviceId" TEXT NOT NULL,
    "userId" TEXT,
    "ringDeviceId" TEXT,
    "heartRate" DOUBLE PRECISION,
    "bloodOxygen" DOUBLE PRECISION,
    "bodyTemp" DOUBLE PRECISION,
    "respRate" DOUBLE PRECISION,
    "hrv" DOUBLE PRECISION,
    "stressLevel" DOUBLE PRECISION,
    "stepCount" INTEGER,
    "activity" TEXT,
    "activityDuration" INTEGER,
    "accelX" DOUBLE PRECISION,
    "accelY" DOUBLE PRECISION,
    "accelZ" DOUBLE PRECISION,
    "gyroX" DOUBLE PRECISION,
    "gyroY" DOUBLE PRECISION,
    "gyroZ" DOUBLE PRECISION,
    "motionIntensity" DOUBLE PRECISION,
    "sleepPattern" TEXT,
    "sleepScore" DOUBLE PRECISION,
    "anomalyScore" DOUBLE PRECISION,
    "signalNoiseLevel" DOUBLE PRECISION,
    "dataIntegrityScore" DOUBLE PRECISION,
    "batteryLevel" DOUBLE PRECISION,
    "ambientTemp" DOUBLE PRECISION,
    "humidity" DOUBLE PRECISION,
    "isTampered" BOOLEAN DEFAULT false,
    "locationLat" DOUBLE PRECISION,
    "locationLon" DOUBLE PRECISION,
    "altitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VitalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RingDevice_deviceId_key" ON "public"."RingDevice"("deviceId");

-- CreateIndex
CREATE INDEX "RingDevice_userId_deviceId_idx" ON "public"."RingDevice"("userId", "deviceId");

-- CreateIndex
CREATE INDEX "VitalRecord_deviceId_timestamp_idx" ON "public"."VitalRecord"("deviceId", "timestamp");

-- CreateIndex
CREATE INDEX "VitalRecord_userId_timestamp_idx" ON "public"."VitalRecord"("userId", "timestamp");

-- AddForeignKey
ALTER TABLE "public"."VitalRecord" ADD CONSTRAINT "VitalRecord_ringDeviceId_fkey" FOREIGN KEY ("ringDeviceId") REFERENCES "public"."RingDevice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
