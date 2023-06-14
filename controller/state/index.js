// @internal
const { stateService } = require('../../service');

async function get(req, res, next) {
  try {
    const state = await stateService.get(req.params)
    res.json(state); 
  } catch (e) {
    next(e)
  }  
}

async function getAll(req, res, next) {
  try {
    const states = await stateService.getAll(req.params)
    res.json(states); 
  } catch (e) {
    next(e)
  }  
}

async function create(req, res, next) {
  try {
    const state = await stateService.create(req.body)
    res.json(state); 
  } catch (e) {
    next(e)
  }  
}

module.exports = {
  get,
  create,
  getAll,
}

