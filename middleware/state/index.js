const ApiError = require("../../exception")

const { emptyValue } = require('../constants')

function create(req, _, next) {
  const { name } = req.body;
  const errors = [];

  !name && errors.push({ input: "name", message: emptyValue })
  if (errors.length > 0){
    throw ApiError.InputError(errors);
  }

  next()
}

module.exports = {
  create
};