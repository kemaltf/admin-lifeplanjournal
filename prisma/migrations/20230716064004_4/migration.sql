/*
  Warnings:

  - A unique constraint covering the columns `[rolename]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Role_rolename_key` ON `Role`(`rolename`);
