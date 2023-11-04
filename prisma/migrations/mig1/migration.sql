-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "species_name" VARCHAR(100) NOT NULL,
    "gps_long" REAL NOT NULL,
    "gps_lat" REAL NOT NULL,
    "image_path" VARCHAR(200) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "test_text" TEXT DEFAULT 'test',
    "test2" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "token" VARCHAR(250),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "images_fkey" ON "images"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_idx" ON "users"("email");

