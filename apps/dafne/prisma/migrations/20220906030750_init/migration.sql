-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "id_user_transmitter" INTEGER NOT NULL,
    "id_user_receiver" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
