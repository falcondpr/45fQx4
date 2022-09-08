-- CreateTable
CREATE TABLE "Requests" (
    "id" SERIAL NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_vendor" TEXT NOT NULL,
    "id_buyer" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageComment" (
    "id" SERIAL NOT NULL,
    "id_user" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "requestsId" INTEGER,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "MessageComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageComment" ADD CONSTRAINT "MessageComment_requestsId_fkey" FOREIGN KEY ("requestsId") REFERENCES "Requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
