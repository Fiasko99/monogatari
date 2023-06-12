// @internal
const { db } = require('../../orm');
const ApiError = require('../../exception');

async function get({ name }) {
  const character = await db.Character.findOne({
    where: { name },
    include: [
      {
        model: db.Post,
        as: 'posts'
      }
    ]
  });
  if (!character) {
    throw ApiError.NotFound();
  };
  return character;
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
  create,
}