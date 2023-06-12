const Router = require('express');
const router = new Router();

// @internal
const user = require("./user")
const character = require("./character")

router.use('/user', user)
router.use('/character', character)

module.exports = router;