const ApiError = require("../../exception");
const { db } = require("../../orm");

async function create({ characterName, locationName, text }) {
  const post = await db.Post.create({
    characterName, locationName, text
  });
  return post;
}

module.exports = {
  create,
}