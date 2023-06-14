// @internal
const errorMiddleware = require('./error')
const { validateJWT } = require('./token')
const userMiddleware = require('./user')
const characterMiddleware = require('./character')
const stateMiddleware = require('./state')
const localityMiddleware = require('./locality')
const locationMiddleware = require('./location')

module.exports = {
  errorMiddleware,
  validateJWT,
  userMiddleware, 
  characterMiddleware,
  stateMiddleware,
  localityMiddleware,
  locationMiddleware,
}