-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwords" TEXT NOT NULL,
    "movie" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "XP" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "watches" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "trophy" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
