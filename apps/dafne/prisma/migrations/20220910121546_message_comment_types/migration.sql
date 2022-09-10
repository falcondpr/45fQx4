/*
  Warnings:

  - Changed the type of `id_buyer` on the `MessageComment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_vendor` on the `MessageComment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MessageComment" DROP COLUMN "id_buyer",
ADD COLUMN     "id_buyer" INTEGER NOT NULL,
DROP COLUMN "id_vendor",
ADD COLUMN     "id_vendor" INTEGER NOT NULL;
