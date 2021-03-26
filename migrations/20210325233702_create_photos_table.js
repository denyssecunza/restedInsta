exports.up = function (knex) {
  return knex.schema.createTable("photos", (table) => {
    table.increments("id");
    table.string("caption");
    table.integer("comment");
    table.integer("likes");
    table.integer("user_id");
    table.foreign("user_id").references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("photos");
};
