const Router = require('express');
const router = new Router();
const path = require('path')

// @internal
const { stateMiddleware, validateJWT } = require('../../middleware')
const { stateController } = require('../../controller')

router.get('/all', stateController.getAll)
router.get('/:name', stateController.get)
router.post('/add', validateJWT, stateMiddleware.create, stateController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;