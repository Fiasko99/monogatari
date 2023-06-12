const ApiError = require('../../exception/index');
const tokenService = require('../../service/token/index');

function validateJWT(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  
  if (!authorizationHeader) {
      throw ApiError.UnauthorizedError();
  }

  const accessToken = authorizationHeader.split(' ')[1];
  if (!accessToken) {
      throw ApiError.BadRequest('Ошибка авторизации');
  }
  
  const userData = tokenService.validateAccessToken(accessToken);
  if (!userData) {
      throw ApiError.BadRequest('Ошибка авторизации');
  }

  req.user = userData;
  next();
};

module.exports = {
  validateJWT
}