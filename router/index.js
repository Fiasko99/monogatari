const Router = require('express');
const router = new Router();

// @internal
const user = require("./user")
const character = require("./character")
const state = require("./state")

router.use('/user', user)
router.use('/character', character)
router.use('/state', state)

module.exports = router;