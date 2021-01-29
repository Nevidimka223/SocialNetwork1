const DiContainer = require('../services/diContainer');
const db = DiContainer.resolve('dbConnection');

class User {
    static tableName = 'users';

    static findByEmail(email) {
      return db(User.tableName).where({ email }).first();
    }

    static findByToken(token) {
      return db(User.tableName).where({ token }).first();
    }

    static saveUser(user) {
      return db(User.tableName).where('id', user.id).update(user, '*');
    }

    static findById(id) {
      return db(User.tableName).where({ id }).first();
    }

    static create(createParams) {
      return db(User.tableName).insert(createParams, '*');
    }

    static update(id, updateParams) {
      return db(User.tableName).where({ id }).update(updateParams,'*');
    }
};

module.exports = User;
