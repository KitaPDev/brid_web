/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Career` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Career_label_key" ON "Career"("label");
