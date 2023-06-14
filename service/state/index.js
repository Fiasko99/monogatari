const ApiError = require("../../exception");
const { db } = require("../../orm");

async function get({ name }) {
  const state = await db.State.findOne({
    where: { name },
    include: [
      {
        model: db.Locality,
        as: 'localities',
        include: [
          {
            model: db.Location,
            as: 'locations',
          }
        ]
      }
    ]
  });
  if (!state) {
    throw ApiError.NotFound();
  };
  return state;
}

async function getAll() {
  const states = await db.State.findAll({
    include: [
      {
        model: db.Locality,
        as: 'localities',
        include: [
          {
            model: db.Location,
            as: 'locations',
          }
        ]
      }
    ]
  });
  if (!states) {
    throw ApiError.NotFound();
  };
  return states;
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
  getAll,
}