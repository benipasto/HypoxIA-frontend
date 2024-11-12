/*
  Warnings:

  - You are about to drop the column `FlujoOxigeno` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `SaturacionOxigeno` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `TiempoSueno` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the `InicioSesion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cargaHipoxica` to the `Analisis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorId` to the `Analisis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturacionOxigeno` to the `Analisis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiempoSueno` to the `Analisis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analisis" DROP COLUMN "FlujoOxigeno",
DROP COLUMN "SaturacionOxigeno",
DROP COLUMN "TiempoSueno",
ADD COLUMN     "cargaHipoxica" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "doctorId" INTEGER NOT NULL,
ADD COLUMN     "saturacionOxigeno" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tiempoSueno" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "InicioSesion";

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- AddForeignKey
ALTER TABLE "Analisis" ADD CONSTRAINT "Analisis_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
