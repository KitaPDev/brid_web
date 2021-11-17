/*
  Warnings:

  - You are about to drop the `career` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content_industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content_module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content_news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_career` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_content_industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_content_module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_content_news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `i18n_news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "content_industry" DROP CONSTRAINT "content_industry_industry_id_fkey";

-- DropForeignKey
ALTER TABLE "content_module" DROP CONSTRAINT "content_module_module_id_fkey";

-- DropForeignKey
ALTER TABLE "content_news" DROP CONSTRAINT "content_news_news_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_career" DROP CONSTRAINT "i18n_career_career_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_career" DROP CONSTRAINT "i18n_career_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_industry" DROP CONSTRAINT "i18n_content_industry_content_industry_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_industry" DROP CONSTRAINT "i18n_content_industry_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_module" DROP CONSTRAINT "i18n_content_module_content_module_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_module" DROP CONSTRAINT "i18n_content_module_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_news" DROP CONSTRAINT "i18n_content_news_content_news_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_content_news" DROP CONSTRAINT "i18n_content_news_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_industry" DROP CONSTRAINT "i18n_industry_industry_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_industry" DROP CONSTRAINT "i18n_industry_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_module" DROP CONSTRAINT "i18n_module_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_module" DROP CONSTRAINT "i18n_module_module_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_news" DROP CONSTRAINT "i18n_news_language_id_fkey";

-- DropForeignKey
ALTER TABLE "i18n_news" DROP CONSTRAINT "i18n_news_news_id_fkey";

-- DropTable
DROP TABLE "career";

-- DropTable
DROP TABLE "contact";

-- DropTable
DROP TABLE "content_industry";

-- DropTable
DROP TABLE "content_module";

-- DropTable
DROP TABLE "content_news";

-- DropTable
DROP TABLE "i18n_career";

-- DropTable
DROP TABLE "i18n_content_industry";

-- DropTable
DROP TABLE "i18n_content_module";

-- DropTable
DROP TABLE "i18n_content_news";

-- DropTable
DROP TABLE "i18n_industry";

-- DropTable
DROP TABLE "i18n_module";

-- DropTable
DROP TABLE "i18n_news";

-- DropTable
DROP TABLE "industry";

-- DropTable
DROP TABLE "language";

-- DropTable
DROP TABLE "module";

-- DropTable
DROP TABLE "news";

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentModule" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "mediaPath" TEXT,

    CONSTRAINT "ContentModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Industry" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "minYearExp" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "nativeName" TEXT NOT NULL,
    "englishName" TEXT NOT NULL,
    "isoTwoLetter" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "I18nModule" (
    "moduleId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "I18nModule_pkey" PRIMARY KEY ("moduleId","languageId")
);

-- CreateTable
CREATE TABLE "I18nContentModule" (
    "contentModuleId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentModule_pkey" PRIMARY KEY ("contentModuleId","languageId")
);

-- CreateTable
CREATE TABLE "I18nIndustry" (
    "industryId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "I18nIndustry_pkey" PRIMARY KEY ("industryId","languageId")
);

-- CreateTable
CREATE TABLE "I18nContentIndustry" (
    "contentIndustryId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentIndustry_pkey" PRIMARY KEY ("contentIndustryId","languageId")
);

-- CreateTable
CREATE TABLE "I18nNews" (
    "newsId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "I18nNews_pkey" PRIMARY KEY ("newsId","languageId")
);

-- CreateTable
CREATE TABLE "I18nContentNews" (
    "contentNewsId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "I18nContentNews_pkey" PRIMARY KEY ("contentNewsId","languageId")
);

-- CreateTable
CREATE TABLE "I18nCareer" (
    "careerId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requiredSkills" TEXT NOT NULL,
    "preferredSkills" TEXT NOT NULL,

    CONSTRAINT "I18nCareer_pkey" PRIMARY KEY ("careerId","languageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Module_label_key" ON "Module"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_label_key" ON "Industry"("label");

-- CreateIndex
CREATE UNIQUE INDEX "News_label_key" ON "News"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Language_nativeName_key" ON "Language"("nativeName");

-- CreateIndex
CREATE UNIQUE INDEX "Language_englishName_key" ON "Language"("englishName");

-- CreateIndex
CREATE UNIQUE INDEX "Language_isoTwoLetter_key" ON "Language"("isoTwoLetter");

-- CreateIndex
CREATE UNIQUE INDEX "I18nCareer_title_key" ON "I18nCareer"("title");

-- AddForeignKey
ALTER TABLE "ContentModule" ADD CONSTRAINT "ContentModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentIndustry" ADD CONSTRAINT "ContentIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentNews" ADD CONSTRAINT "ContentNews_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nModule" ADD CONSTRAINT "I18nModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nModule" ADD CONSTRAINT "I18nModule_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentModule" ADD CONSTRAINT "I18nContentModule_contentModuleId_fkey" FOREIGN KEY ("contentModuleId") REFERENCES "ContentModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentModule" ADD CONSTRAINT "I18nContentModule_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nIndustry" ADD CONSTRAINT "I18nIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nIndustry" ADD CONSTRAINT "I18nIndustry_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentIndustry" ADD CONSTRAINT "I18nContentIndustry_contentIndustryId_fkey" FOREIGN KEY ("contentIndustryId") REFERENCES "ContentIndustry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentIndustry" ADD CONSTRAINT "I18nContentIndustry_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nNews" ADD CONSTRAINT "I18nNews_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nNews" ADD CONSTRAINT "I18nNews_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentNews" ADD CONSTRAINT "I18nContentNews_contentNewsId_fkey" FOREIGN KEY ("contentNewsId") REFERENCES "ContentNews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nContentNews" ADD CONSTRAINT "I18nContentNews_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nCareer" ADD CONSTRAINT "I18nCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "I18nCareer" ADD CONSTRAINT "I18nCareer_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
