const Router = require('express');
const router = new Router();

// @internal
const { regionMiddleware, validateJWT } = require('../../middleware')
const { regionController } = require('../../controller')

router.get('/:name', regionController.get)
router.post('/add', validateJWT, regionMiddleware.create, regionController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;