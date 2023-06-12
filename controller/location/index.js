// @internal
const { locationService } = require('../../service');

async function get(req, res, next) {
  try {
    const location = await locationService.get(req.params)
    res.json(location); 
  } catch (e) {
    next(e)
  }  
}

async function create(req, res, next) {
  try {
    const location = await locationService.create(req.body)
    res.json(location); 
  } catch (e) {
    next(e)
  }  
}

module.exports = {
  get,
  create,
}

