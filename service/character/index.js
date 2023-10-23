// @internal
const { db } = require('../../orm');
const ApiError = require('../../exception');

async function get({ name }) {
  const character = await db.Character.findOne({
    where: { name }
  });
  if (!character) {
    throw ApiError.NotFound();
  };
  return character;
}

async function edit({ name, userLogin, ...args }) {
  const character = await db.Character.findOne({
    where: { userLogin, name },
  });
  if (!character) {
    throw ApiError.NotFound();
  };
  await character.update({ ...args });
}

async function getAllByUser({ login }) {
  const characters = await db.Character.findAll({
    where: { userLogin: login },
    order: [
      [
        'name',
        'DESC'
      ],
    ],
  });
  if (!characters) {
    throw ApiError.NotFound();
  };
  return characters;
}

async function create(userLogin, name) {
  const candidate = await db.Character.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.AlreadyExist();
  };

  const character = await db.Character.create({ name, userLogin })

  return character;
}

module.exports = {
  get,
  edit,
  getAllByUser,
  create,
}