const ApiError = require("../../exception");
const { db } = require("../../orm");

async function get({ name }) {
  const region = await db.Region.findOne({
    where: { name }
  });
  if (!region) {
    throw ApiError.NotFound();
  };
  return region;
}

async function create({ stateName, name }) {
  const candidate = await db.Region.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.AlreadyExist();
  };
  const region = await db.Region.create({ name, stateName })
  return region;
}

module.exports = {
  get, 
  create,
}