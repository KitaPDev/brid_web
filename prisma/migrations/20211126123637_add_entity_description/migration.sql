-- AlterTable
ALTER TABLE "I18nCareer" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "I18nContentIndustry" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "I18nContentModule" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "I18nContentNews" ADD COLUMN     "description" TEXT;
