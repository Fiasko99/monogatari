// @internal
const { characterService } = require('../../service')

async function get(req, res, next) {
  try {
    const character = await characterService.get(req.params);
    res.json(character)
  } catch (e) {
    next(e)
  }
}

async function getAllByMe(req, res, next) {
  try {
    const characters = await characterService.getAllByUser(req.user);
    res.json(characters)
  } catch (e) {
    next(e)
  }
}

async function activate(req, res, next) {
  try {
    await characterService.edit({
      name: req.params.name,
      userLogin: req.user.login,
      active: true,
    });
    const characters = await characterService.getAllByUser(req.user);
    res.json(characters)
  } catch (e) {
    next(e)
  }
}

async function create(req, res, next) {
  try {
    const { login } = req.user;
    const { name } = req.body;
    const character = await characterService.create(login, name);
    res.json(character)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  get,
  getAllByMe,
  create,
  activate,
};