/*
  Warnings:

  - You are about to drop the column `id_request` on the `MessageComment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessageComment" DROP CONSTRAINT "MessageComment_id_request_fkey";

-- AlterTable
ALTER TABLE "MessageComment" DROP COLUMN "id_request";
