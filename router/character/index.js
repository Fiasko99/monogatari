const Router = require('express');
const router = new Router();

// @internal
const { characterMiddleware, validateJWT } = require('../../middleware');
const { characterController } = require('../../controller');

router.get('/all/me', validateJWT, characterController.getAllByMe)
router.get('/all/:login')
router.get('/activate/:name', validateJWT, characterController.activate)
router.get('/:name', characterController.get)
router.post('/add', validateJWT, characterMiddleware.create, characterController.create)
router.put('/:name', validateJWT)
router.delete('/:name', validateJWT)

module.exports = router;