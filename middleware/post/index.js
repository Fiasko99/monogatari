const ApiError = require("../../exception");

const { emptyValue } = require('../constants');

function create(req, _, next) {
  const { locationName, text } = req.body;
  
  if (!locationName) {
    throw ApiError.BadRequest('Попытка отправки поста вне локации')
  }
  if (!text){
    throw ApiError.InputError([{ input: "text", message: emptyValue }]);
  };

  next();
};

module.exports = {
  create,
};