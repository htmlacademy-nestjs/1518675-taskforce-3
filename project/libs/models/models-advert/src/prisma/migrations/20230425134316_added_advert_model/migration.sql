/*
  Warnings:

  - You are about to drop the column `user` on the `reviews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "user",
ALTER COLUMN "user_id" SET DATA TYPE TEXT;
