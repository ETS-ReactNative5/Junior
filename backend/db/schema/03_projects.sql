DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE "projects" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "junior_dev_id" INTEGER REFERENCES junior_devs(id) ON DELETE CASCADE,
  "title" VARCHAR(50) NOT NULL,
  "description" VARCHAR(225) NOT NULL,
  "thumbnail_photo_url" VARCHAR(225) NOT NULL DEFAULT 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png',
  "github_link" VARCHAR(225)
  "live_link" VARCHAR(225)
);