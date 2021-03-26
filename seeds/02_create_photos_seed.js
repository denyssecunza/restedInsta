exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("photos").insert([
        {
          photo_link:
            "https://theknow.denverpost.com/wp-content/uploads/2020/08/IMG_4252.jpg",
          caption: "this is a caption 1",
          comment: 0,
          likes: 0,
          user_id: 2,
        },
        {
          photo_link:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Si3Cz3XEwq40m5cGhDbrxEnZbAnKARQYSw&usqp=CAU",
          caption: "this is a caption 2",
          comment: 0,
          likes: 0,
          user_id: 1,
        },
        {
          photo_link:
            "https://theknow.denverpost.com/wp-content/uploads/2020/08/IMG_4252.jpg",
          caption: "this is a caption 3",
          comment: 0,
          likes: 0,
          user_id: 3,
        },
      ]);
    });
};
