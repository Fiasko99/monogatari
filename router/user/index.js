const Router = require('express');
const router = new Router();

// @internal
const { userMiddleware, validateJWT } = require('../../middleware');
const { userController } = require('../../controller');

router.post('/signin', userMiddleware.signin, userController.signin);
router.post('/signup', userMiddleware.signup, userController.signup);
router.get('/:login', userController.get);
router.get('/logout', validateJWT);
router.get('/refresh');

module.exports = router;