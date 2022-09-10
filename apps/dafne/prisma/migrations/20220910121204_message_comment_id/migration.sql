/*
  Warnings:

  - Added the required column `id_request` to the `MessageComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MessageComment" ADD COLUMN     "id_request" INTEGER NOT NULL;
