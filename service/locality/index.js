const ApiError = require("../../exception");
const { db } = require("../../orm");

async function get({ name }) {
  const locality = await db.Locality.findOne({
    where: { name }
  });
  if (!locality) {
    throw ApiError.NotFound();
  };
  return locality;
}

async function create({ regionName, name }) {
  const candidate = await db.Locality.findOne({
    where: { name }
  });
  if (candidate) {
    throw ApiError.AlreadyExist();
  };
  const locality = await db.Locality.create({ name, regionName })
  return locality;
}

module.exports = {
  get, 
  create,
}