const ApiError = require("../../exception");

const { emptyValue } = require('../constants');

function create(req, _, next) {
  const { characterName, locationName, text } = req.body;

  if (!characterName) {
    throw ApiError.BadRequest('У вас нет активных персонажей')
  }
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