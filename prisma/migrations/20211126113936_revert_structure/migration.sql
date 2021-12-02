/*
  Warnings:

  - You are about to drop the column `content` on the `I18nIndustry` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `I18nModule` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `I18nNews` table. All the data in the column will be lost.
  - You are about to drop the column `displayOrder` on the `Industry` table. All the data in the column will be lost.
  - You are about to drop the column `mediaPath` on the `Industry` table. All the data in the column will be lost.
  - You are about to drop the column `displayOrder` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `mediaPath` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `displayOrder` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `mediaPath` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `postedAt` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeEmbedId` on the `News` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "I18nIndustry" DROP COLUMN "content",
ALTER COLUMN "label" DROP DEFAULT;

-- AlterTable
ALTER TABLE "I18nModule" DROP COLUMN "content",
ALTER COLUMN "label" DROP DEFAULT;

-- AlterTable
ALTER TABLE "I18nNews" DROP COLUMN "content",
ALTER COLUMN "label" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Industry" DROP COLUMN "displayOrder",
DROP COLUMN "mediaPath";

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "displayOrder",
DROP COLUMN "mediaPath";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "displayOrder",
DROP COLUMN "mediaPath",
DROP COLUMN "postedAt",
DROP COLUMN "youtubeEmbedId";

-- CreateTable
CREATE TABLE "ContentModule" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "mediaPath" TEXT,

    CONSTRAINT "ContentModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "I18nContentModule" (
    "contentModuleId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentModule_pkey" PRIMARY KEY ("contentModuleId","languageId")
);

-- CreateTable
CREATE TABLE "ContentIndustry" (
    "id" SERIAL NOT NULL,
    "industryId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "mediaPath" TEXT,

    CONSTRAINT "ContentIndustry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "I18nContentIndustry" (
    "contentIndustryId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentIndustry_pkey" PRIMARY KEY ("contentIndustryId","languageId")
);

-- CreateTable
CREATE TABLE "ContentNews" (
    "id" SERIAL NOT NULL,
    "newsId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "mediaPath" TEXT NOT NULL,
    "youtubeEmbedId" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "I18nContentNews" (
    "contentNewsId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentNews_pkey" PRIMARY KEY ("contentNewsId","languageId")
);

-- AddForeignKey
ALTER TABLE "ContentModule" ADD CONSTRAINT "ContentModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentModule" ADD CONSTRAINT "I18nContentModule_contentModuleId_fkey" FOREIGN KEY ("contentModuleId") REFERENCES "ContentModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentModule" ADD CONSTRAINT "I18nContentModule_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentIndustry" ADD CONSTRAINT "ContentIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentIndustry" ADD CONSTRAINT "I18nContentIndustry_contentIndustryId_fkey" FOREIGN KEY ("contentIndustryId") REFERENCES "ContentIndustry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentIndustry" ADD CONSTRAINT "I18nContentIndustry_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentNews" ADD CONSTRAINT "ContentNews_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentNews" ADD CONSTRAINT "I18nContentNews_contentNewsId_fkey" FOREIGN KEY ("contentNewsId") REFERENCES "ContentNews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentNews" ADD CONSTRAINT "I18nContentNews_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
