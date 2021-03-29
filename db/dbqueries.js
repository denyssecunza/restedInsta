const knex = require("./knex");
module.exports = {
  
  getAll(table) {
    return knex(table);
  },

  getAllComments() {
    return knex.select([
        'comments.id',
        'comments.user_id',
        'comments.photo_id',
        'comments.comments_text',
        'users.username',
    ]).from('comments').innerJoin('users', 'users.id', '=', 'comments.user_id')
       .orderBy('comments.id', 'asc');
  },

  getAllPhotos() {
    return knex.select([
        'photos.id',
        'photos.photo_link',
        'photos.caption',
        'photos.comment',
        'photos.likes',
        'photos.user_id',
        'users.username',
        'photos.created_at',
    ]).from('photos').innerJoin('users', 'users.id', '=', 'photos.user_id').orderBy('photos.created_at', 'desc');
  },

  getOne(table, id) {
    return table == 'users' ? knex.table('users').select('id', 'username').first() : knex(table).where('id', id).first();
  },

  getPhotoByUser(id) {
    return knex.table('photo').where('user_id', id);
  },


  createComment(user_id, photo_id, comments_text) {
    return knex('comments').insert({  user_id: 1, photo_id: photo_id, comments_text: comments_text });
  },

  
};
