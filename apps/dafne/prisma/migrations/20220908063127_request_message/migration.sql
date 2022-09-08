/*
  Warnings:

  - You are about to drop the column `id_user` on the `MessageComment` table. All the data in the column will be lost.
  - You are about to drop the column `requestsId` on the `MessageComment` table. All the data in the column will be lost.
  - You are about to drop the column `id_buyer` on the `Requests` table. All the data in the column will be lost.
  - You are about to drop the column `id_vendor` on the `Requests` table. All the data in the column will be lost.
  - Added the required column `id_buyer` to the `MessageComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_request` to the `MessageComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_vendor` to the `MessageComment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MessageComment" DROP CONSTRAINT "MessageComment_requestsId_fkey";

-- AlterTable
ALTER TABLE "MessageComment" DROP COLUMN "id_user",
DROP COLUMN "requestsId",
ADD COLUMN     "id_buyer" TEXT NOT NULL,
ADD COLUMN     "id_request" INTEGER NOT NULL,
ADD COLUMN     "id_vendor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Requests" DROP COLUMN "id_buyer",
DROP COLUMN "id_vendor";

-- AddForeignKey
ALTER TABLE "MessageComment" ADD CONSTRAINT "MessageComment_id_request_fkey" FOREIGN KEY ("id_request") REFERENCES "Requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
