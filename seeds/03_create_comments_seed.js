exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        { user_id: 1, photo_id: 4, comments_text: "This is comment" },
      ]);
    });
};
