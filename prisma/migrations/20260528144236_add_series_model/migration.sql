/*
  Warnings:

  - You are about to drop the column `series` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "series";

-- CreateTable
CREATE TABLE "Series" (
    "id" TEXT NOT NULL,
    "tvmazeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "genres" TEXT[],
    "rating" DOUBLE PRECISION,
    "premiered" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Series_tvmazeId_key" ON "Series"("tvmazeId");

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
