-- CreateTable
CREATE TABLE "module" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_module" (
    "id" SERIAL NOT NULL,
    "module_id" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL,
    "media_path" TEXT,

    CONSTRAINT "content_module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "industry" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_industry" (
    "id" SERIAL NOT NULL,
    "industry_id" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL,
    "media_path" TEXT,

    CONSTRAINT "content_industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_news" (
    "id" SERIAL NOT NULL,
    "news_id" INTEGER NOT NULL,
    "display_order" INTEGER NOT NULL,
    "media_path" TEXT NOT NULL,
    "youtube_embed_id" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "min_year_exp" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "organization_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "language" (
    "id" SERIAL NOT NULL,
    "native_name" TEXT NOT NULL,
    "english_name" TEXT NOT NULL,
    "iso_two_letter" TEXT NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "i18n_module" (
    "module_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "i18n_module_pkey" PRIMARY KEY ("module_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_content_module" (
    "content_module_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "i18n_content_module_pkey" PRIMARY KEY ("content_module_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_industry" (
    "industry_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "i18n_industry_pkey" PRIMARY KEY ("industry_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_content_industry" (
    "content_industry_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "i18n_content_industry_pkey" PRIMARY KEY ("content_industry_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_news" (
    "news_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "i18n_news_pkey" PRIMARY KEY ("news_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_content_news" (
    "content_news_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "i18n_content_news_pkey" PRIMARY KEY ("content_news_id","language_id")
);

-- CreateTable
CREATE TABLE "i18n_career" (
    "career_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "required_skills" TEXT NOT NULL,
    "preferred_skills" TEXT NOT NULL,

    CONSTRAINT "i18n_career_pkey" PRIMARY KEY ("career_id","language_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "module_label_key" ON "module"("label");

-- CreateIndex
CREATE UNIQUE INDEX "industry_label_key" ON "industry"("label");

-- CreateIndex
CREATE UNIQUE INDEX "news_label_key" ON "news"("label");

-- CreateIndex
CREATE UNIQUE INDEX "language_native_name_key" ON "language"("native_name");

-- CreateIndex
CREATE UNIQUE INDEX "language_english_name_key" ON "language"("english_name");

-- CreateIndex
CREATE UNIQUE INDEX "language_iso_two_letter_key" ON "language"("iso_two_letter");

-- CreateIndex
CREATE UNIQUE INDEX "i18n_career_title_key" ON "i18n_career"("title");

-- AddForeignKey
ALTER TABLE "content_module" ADD CONSTRAINT "content_module_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_industry" ADD CONSTRAINT "content_industry_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_news" ADD CONSTRAINT "content_news_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_module" ADD CONSTRAINT "i18n_module_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_module" ADD CONSTRAINT "i18n_module_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_module" ADD CONSTRAINT "i18n_content_module_content_module_id_fkey" FOREIGN KEY ("content_module_id") REFERENCES "content_module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_module" ADD CONSTRAINT "i18n_content_module_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_industry" ADD CONSTRAINT "i18n_industry_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_industry" ADD CONSTRAINT "i18n_industry_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_industry" ADD CONSTRAINT "i18n_content_industry_content_industry_id_fkey" FOREIGN KEY ("content_industry_id") REFERENCES "content_industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_industry" ADD CONSTRAINT "i18n_content_industry_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_news" ADD CONSTRAINT "i18n_news_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_news" ADD CONSTRAINT "i18n_news_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_news" ADD CONSTRAINT "i18n_content_news_content_news_id_fkey" FOREIGN KEY ("content_news_id") REFERENCES "content_news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_content_news" ADD CONSTRAINT "i18n_content_news_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_career" ADD CONSTRAINT "i18n_career_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "i18n_career" ADD CONSTRAINT "i18n_career_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
