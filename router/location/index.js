const Router = require('express');
const router = new Router();

// @internal
const { locationMiddleware, validateJWT } = require('../../middleware')
const { locationController } = require('../../controller')

router.get('/:name', locationController.get)
router.post('/add', validateJWT, locationMiddleware.create, locationController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;