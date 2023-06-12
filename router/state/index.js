const Router = require('express');
const router = new Router();

// @internal
const { stateMiddleware, validateJWT } = require('../../middleware')
const { stateController } = require('../../controller')

router.get('/:name', stateController.get)
router.post('/add', validateJWT, stateMiddleware.create, stateController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;