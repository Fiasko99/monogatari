// @internal
const { postService } = require('../../service');

async function create(req, res, next) {
  try {
    const post = await postService.create({...req.body, ...req.user})
    res.json(post); 
  } catch (e) {
    next(e)
  }  
}

module.exports = {
  create,
}

