const bcrypt = require('bcrypt');

// @internal
const { db } = require('../../orm');
const ApiError = require('../../exception');
const { attributes } = require('./constants')

async function check({ login, password }) {
  const user = await db.User.findOne({
    where: { login }
  });

  if (!user) {
    throw ApiError.NotFound();
  };

  const isPassEquals = bcrypt.compareSync(password, user.password);
  if (!isPassEquals) {
    throw ApiError.BadRequest('Неверный пароль');
  };

  return user;
}

async function get({ login }) {
  const user = await db.User.findOne({
    where: { login },
    attributes,
    include: [
      {
        model: db.Character,
        as: 'characters',
      }
    ],
    order: [
      [
        {model: db.Character, as: 'characters'},
        'name',
        'DESC'
      ],
    ],
  });
  if (!user) {
    throw ApiError.NotFound();
  };

  return user;
}

async function create({ login, password, email }) {
  const candidate = await db.User.findOne({
    where: { login }
  });

  if (candidate) {
    throw ApiError.AlreadyExist();
  };

  const salt = parseInt(process.env.SALT);
  const hashPassword = bcrypt.hashSync(password, salt);
  const user = await db.User.create({
    login, email, password: hashPassword,
  });

  return user;
}

module.exports = {
  check,
  get,
  create,
}