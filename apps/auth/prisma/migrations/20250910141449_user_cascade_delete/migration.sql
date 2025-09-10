-- DropForeignKey
ALTER TABLE "public"."Caregiver" DROP CONSTRAINT "Caregiver_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Elder" DROP CONSTRAINT "Elder_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Relative" DROP CONSTRAINT "Relative_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Elder" ADD CONSTRAINT "Elder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relative" ADD CONSTRAINT "Relative_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
