// @internal
const errorMiddleware = require('./error')
const { validateJWT } = require('./token')
const userMiddleware = require('./user')
const characterMiddleware = require('./character')
const stateMiddleware = require('./state')
const regionMiddleware = require('./region')

module.exports = {
  errorMiddleware,
  validateJWT,
  userMiddleware, 
  characterMiddleware,
  stateMiddleware,
  regionMiddleware,
}