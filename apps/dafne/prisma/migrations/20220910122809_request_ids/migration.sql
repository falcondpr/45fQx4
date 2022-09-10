/*
  Warnings:

  - Added the required column `id_buyer` to the `Requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_vendor` to the `Requests` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id_product` on the `Requests` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "id_buyer" INTEGER NOT NULL,
ADD COLUMN     "id_vendor" INTEGER NOT NULL,
DROP COLUMN "id_product",
ADD COLUMN     "id_product" INTEGER NOT NULL;
