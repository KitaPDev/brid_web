/*
  Warnings:

  - You are about to drop the `ContentIndustry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentModule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentNews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `I18nContentIndustry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `I18nContentModule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `I18nContentNews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentIndustry" DROP CONSTRAINT "ContentIndustry_industryId_fkey";

-- DropForeignKey
ALTER TABLE "ContentModule" DROP CONSTRAINT "ContentModule_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "ContentNews" DROP CONSTRAINT "ContentNews_newsId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentIndustry" DROP CONSTRAINT "I18nContentIndustry_contentIndustryId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentIndustry" DROP CONSTRAINT "I18nContentIndustry_languageId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentModule" DROP CONSTRAINT "I18nContentModule_contentModuleId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentModule" DROP CONSTRAINT "I18nContentModule_languageId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentNews" DROP CONSTRAINT "I18nContentNews_contentNewsId_fkey";

-- DropForeignKey
ALTER TABLE "I18nContentNews" DROP CONSTRAINT "I18nContentNews_languageId_fkey";

-- AlterTable
ALTER TABLE "I18nIndustry" ADD COLUMN     "content" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "label" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "I18nModule" ADD COLUMN     "content" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "label" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "I18nNews" ADD COLUMN     "content" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "label" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "Industry" ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT -1,
ADD COLUMN     "mediaPath" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT -1,
ADD COLUMN     "mediaPath" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "displayOrder" INTEGER NOT NULL DEFAULT -1,
ADD COLUMN     "mediaPath" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "youtubeEmbedId" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "ContentIndustry";

-- DropTable
DROP TABLE "ContentModule";

-- DropTable
DROP TABLE "ContentNews";

-- DropTable
DROP TABLE "I18nContentIndustry";

-- DropTable
DROP TABLE "I18nContentModule";

-- DropTable
DROP TABLE "I18nContentNews";
