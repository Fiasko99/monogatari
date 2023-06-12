// @internal
const { localityService } = require('../../service');

async function get(req, res, next) {
  try {
    const locality = await localityService.get(req.params)
    res.json(locality); 
  } catch (e) {
    next(e)
  }  
}

async function create(req, res, next) {
  try {
    const locality = await localityService.create(req.body)
    res.json(locality); 
  } catch (e) {
    next(e)
  }  
}

module.exports = {
  get,
  create,
}

