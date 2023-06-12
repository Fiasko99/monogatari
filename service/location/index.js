const ApiError = require("../../exception");
const { db } = require("../../orm");

async function get({ name }) {
  const location = await db.Location.findOne({
    where: { name }
  });
  if (!location) {
    throw ApiError.NotFound();
  };
  return location;
}

async function create({ localityName, name }) {
  const candidate = await db.Location.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.AlreadyExist();
  };
  const location = await db.Location.create({ name, localityName })
  return location;
}

module.exports = {
  get, 
  create,
}