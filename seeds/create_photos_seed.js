exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("photos").insert([
        { caption: "this is a caption 1", comment: 0, likes: 0, user_id: 2 },
        { caption: "this is a caption 2", comment: 0, likes: 0, user_id: 1 },
        { caption: "this is a caption 3", comment: 0, likes: 0, user_id: 3 },
      ]);
    });
};
