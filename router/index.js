const Router = require('express');
const router = new Router();

// @internal
const user = require("./user")
const character = require("./character")
const state = require("./state")
const region = require("./region")

router.use('/user', user)
router.use('/character', character)
router.use('/state', state)
router.use('/region', region)

module.exports = router;