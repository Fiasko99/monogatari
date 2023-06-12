const jwt = require('jsonwebtoken');

function generateTokens(payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' })
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '2h' })
  return {
    accessToken,
    refreshToken
  }
}

function validateAccessToken(token) {
  const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  return userData;
}

function validateRefreshToken(token) {
  const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  return userData;
}

module.exports = {
  generateTokens,
  validateAccessToken,
  validateRefreshToken,
};