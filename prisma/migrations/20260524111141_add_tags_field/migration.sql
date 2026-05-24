/*
  Warnings:

  - The `movie` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `series` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `trophy` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "movie",
ADD COLUMN     "movie" TEXT[],
DROP COLUMN "series",
ADD COLUMN     "series" TEXT[],
DROP COLUMN "trophy",
ADD COLUMN     "trophy" TEXT[];
