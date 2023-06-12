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

const createStates = async (db) => {
  const data = [
    { name: 'state1'},
    { name: 'state2'},
    { name: 'state3'},
  ];
  for (const item of data) {
    await db.State.create(item);
  };
};

const createRegions = async (db) => {
  const data = [
    { name: 'region1', stateName: 'state1'},
    { name: 'region2', stateName: 'state1'},
    { name: 'region3', stateName: 'state1'},
  ];
  for (const item of data) {
    await db.Region.create(item);
  };
};

const createLocalities = async (db) => {
  const data = [
    { name: 'locality1', regionName: 'region1'},
    { name: 'locality2', regionName: 'region1'},
    { name: 'locality3', regionName: 'region1'},
  ];
  for (const item of data) {
    await db.Locality.create(item);
  };
};

module.exports = async (db) => {
  await createUsers(db);
  await createCharacters(db);
  await createStates(db);
  await createRegions(db);
  await createLocalities(db);
}