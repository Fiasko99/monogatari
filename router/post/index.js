const Router = require('express');
const router = new Router();

// @internal
const { validateJWT, postMiddleware } = require('../../middleware')
const { postController } = require('../../controller')

router.get('/:name')
router.post('/add', validateJWT, postMiddleware.create, postController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;