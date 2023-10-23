const ApiError = require("../../exception");
const { db } = require("../../orm");

async function create({ login, locationName, text }) {
  const character = await db.Character.findOne({
    where: { userLogin: login, active: true },
  });
  if (!character) {
    throw ApiError.BadRequest('У вас нет активных персонажей');
  }
  const post = await db.Post.create({
    characterName: character.name, locationName, text
  });
  return post;
}

module.exports = {
  create,
}