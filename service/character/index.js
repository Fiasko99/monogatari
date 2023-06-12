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

async function create(login, name) {
  const candidate = await db.Character.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.BadRequest('Персонаж с таким именем уже существует');
  };

  const character = await db.Character.create({ name, userLogin: login })

  return character;
}

module.exports = {
  get,
  create,
}