const ApiError = require("../../exception");
const { db } = require("../../orm");

async function get({ name }) {
  const state = await db.State.findOne({
    where: { name }
  });
  if (!state) {
    throw ApiError.NotFound();
  };
  return state;
}

async function create({ name }) {
  const candidate = await db.State.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.AlreadyExist();
  };
  const state = await db.State.create({ name })
  return state;
}

module.exports = {
  get, 
  create,
}