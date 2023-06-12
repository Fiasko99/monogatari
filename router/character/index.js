const Router = require('express');
const router = new Router();

// @internal
const { characterMiddleware, validateJWT } = require('../../middleware');
const { characterController } = require('../../controller');

router.get('/:name', characterController.get)
router.post('/add', validateJWT, characterMiddleware.create, characterController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;