exports.up = function (knex) {
  return knex.schema.createTable("photo_likes", (table) => {
    table.boolean("is_liked");
    table.integer("user_id").references("users.id");
    table.integer("photo_id").references("photos.id");
    table.primary(["user_id", "photo_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("photo_likes");
};
