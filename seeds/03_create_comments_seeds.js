
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 1, photo_id: 1, comments_text: 'wow the moon looks so nice'}, // 2
        {user_id: 3, photo_id: 2, comments_text: 'such a pretty beach'}, // 1
        {user_id: 2, photo_id: 3, comments_text: 'nice sunset'},      // 3
        {user_id: 4, photo_id: 4, comments_text: 'cant wait for it to drop'},  // 6
        {user_id: 5, photo_id: 5, comments_text: 'lets goooo'}, //        4
        {user_id: 6, photo_id: 6, comments_text: 'soo beautiful'}, //        5
        {user_id: 10, photo_id: 7, comments_text: 'woah cool'},  // 8
        {user_id: 8, photo_id: 8, comments_text: 'good game'},  //          7
        {user_id: 7, photo_id: 9, comments_text: 'the next tony hawk'},  //  9
        {user_id: 9, photo_id: 10, comments_text: 'ugh i wanna go'},  //       11
        {user_id: 12, photo_id: 11, comments_text: 'ooo i was there too '},   ///          10
        {user_id: 11, photo_id: 12, comments_text: 'had so much funnn'} // 12
      ]);
    });
};
