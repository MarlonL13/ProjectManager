/*
  Warnings:

  - You are about to drop the column `endtDate` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "endtDate",
ADD COLUMN     "endDate" TIMESTAMP(3);
