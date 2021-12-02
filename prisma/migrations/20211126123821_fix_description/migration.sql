/*
  Warnings:

  - You are about to drop the column `description` on the `I18nContentIndustry` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `I18nContentModule` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `I18nContentNews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "I18nContentIndustry" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "I18nContentModule" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "I18nContentNews" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "I18nIndustry" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "I18nModule" ADD COLUMN     "description" TEXT;
