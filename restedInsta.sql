CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "photos" (
  "id" SERIAL PRIMARY KEY,
  "caption" varchar NOT NULL,
  "comment" int,
  "likes" int,
  "user_id" int
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "photo_id" int,
  "comment_text" varchar NOT NULL
);

CREATE TABLE "photo_likes" (
  "user_id" int,
  "photo_id" int,
  PRIMARY KEY ('user_id', 'photo_id')
);

ALTER TABLE "photos" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("photo_id") REFERENCES "photos" ("id");

ALTER TABLE "photo_likes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "photo_likes" ADD FOREIGN KEY ("photo_id") REFERENCES "photos" ("id");
