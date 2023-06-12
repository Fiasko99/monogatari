const bcrypt = require('bcrypt');

const createUsers = async (db) => {
  const salt = parseInt(process.env.SALT);
  const data = [
    { login: 'user', password: bcrypt.hashSync('user', salt), email: 'snakeice2000@mail.ru' },
  ];
  for (const item of data) {
    await db.User.create(item);
  };
};

const createCharacters = async (db) => {
  const data = [
    { name: 'character1', userLogin: 'user' },
    { name: 'character2', userLogin: 'user' },
    { name: 'character3', userLogin: 'user' },
  ];
  for (const item of data) {
    await db.Character.create(item);
  };
};

module.exports = async (db) => {
  await createUsers(db);
  await createCharacters(db);
}