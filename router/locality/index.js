const Router = require('express');
const router = new Router();

// @internal
const { localityMiddleware, validateJWT } = require('../../middleware')
const { localityController } = require('../../controller')

router.get('/:name', localityController.get)
router.post('/add', validateJWT, localityMiddleware.create, localityController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;