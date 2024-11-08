-- CreateTable
CREATE TABLE "InicioSesion" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InicioSesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analisis" (
    "id" SERIAL NOT NULL,
    "paciente" TEXT,
    "SaturacionOxigeno" INTEGER NOT NULL,
    "FlujoOxigeno" INTEGER NOT NULL,
    "TiempoSueno" INTEGER NOT NULL,

    CONSTRAINT "Analisis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InicioSesion_email_key" ON "InicioSesion"("email");
