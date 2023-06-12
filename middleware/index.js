// @internal
const errorMiddleware = require('./error')
const userMiddleware = require('./user')
const { validateJWT } = require('./token')
const characterMiddleware = require('./character')

module.exports = {
  errorMiddleware,
  userMiddleware, 
  validateJWT,
  characterMiddleware,
}