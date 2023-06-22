// @internal
const userController = require('./user');
const characterController = require('./character');
const stateController = require('./state');
const localityController = require('./locality');
const locationController = require('./location');
const postController = require('./post');

module.exports = {
  userController,
  characterController,
  stateController,
  localityController,
  locationController,
  postController,
}