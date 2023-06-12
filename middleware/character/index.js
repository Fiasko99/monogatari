const ApiError = require("../../exception")

const emptyValue = 'Пустое поле'

function create(req, _, next) {
  const { name } = req.body;
  const errors = [];

  !name && errors.push({ input: "name", message: emptyValue })
  if (errors.length > 0){
    throw ApiError.BadRequest("Ошибка ввода", errors)
  }

  next()
}

module.exports = {
  create
};