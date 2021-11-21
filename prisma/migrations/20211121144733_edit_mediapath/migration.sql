-- AlterTable
ALTER TABLE "ContentIndustry" ALTER COLUMN "mediaPath" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "ContentModule" ALTER COLUMN "mediaPath" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "ContentNews" ALTER COLUMN "mediaPath" DROP NOT NULL,
ALTER COLUMN "mediaPath" SET DEFAULT E'';
