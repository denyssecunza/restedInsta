exports.up = function (knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id");
    table.integer("user_id");
    table.integer("photo_id");
    table.string("comments_text");
    table.foreign("user_id").references("id").inTable("users");
    table.foreign("photo_id").references("id").inTable("photos");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
