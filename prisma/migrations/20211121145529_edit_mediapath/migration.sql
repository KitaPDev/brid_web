/*
  Warnings:

  - Made the column `mediaPath` on table `ContentIndustry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mediaPath` on table `ContentModule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mediaPath` on table `ContentNews` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContentIndustry" ALTER COLUMN "mediaPath" SET NOT NULL;

-- AlterTable
ALTER TABLE "ContentModule" ALTER COLUMN "mediaPath" SET NOT NULL;

-- AlterTable
ALTER TABLE "ContentNews" ALTER COLUMN "mediaPath" SET NOT NULL;
