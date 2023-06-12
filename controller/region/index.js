// @internal
const { regionService } = require('../../service');

async function get(req, res, next) {
  try {
    const region = await regionService.get(req.params)
    res.json(region); 
  } catch (e) {
    next(e)
  }  
}

async function create(req, res, next) {
  try {
    const region = await regionService.create(req.body)
    res.json(region); 
  } catch (e) {
    next(e)
  }  
}

module.exports = {
  get,
  create,
}

