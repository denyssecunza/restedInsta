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

  // async createUser(username, email, password) {
  //   try {
  //       let password_hash = await argon.hash(password);
  //       return knex('users').returning(['username', 'email']).insert({ username: username, email: email, password_hash: password_hash });
  //   } catch (error) {
  //       process.exit(1);
  //   }
  // },

  // async createPost(id, title, body) {
  //   return knex('posts').insert({ body: body, title: title, user_id: id });
  // },

  createComment(photoId, userId, comments_text) {
    return knex('comments').returning(['comments_text']).insert({ photo_id: photoId, user_id: userId, comments_text: comments_text });
  },

  // async login(username, password) {
  //   let getUser = await knex('users').where('username', username);
  //   let user = getUser[0];

  //   try {
  //       if (await argon.verify(user.password_hash, password)) {
  //           return user;
  //       }
  //       throw Error('Wrong username or password');
  //   } catch (e) {
  //       throw Error('Wrong username or password');
  //   }
  // },

  // async getToken(token) {
  //   newToken = auth.decodeToken(token)
  //   return newToken;
  // }
};
