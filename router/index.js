const Router = require('express');
const router = new Router();

// @internal
const user = require("./user")
const character = require("./character")
const state = require("./state")
const region = require("./region")
const locality = require("./locality")
const location = require("./location")

router.use('/user', user)
router.use('/character', character)
router.use('/state', state)
router.use('/region', region)
router.use('/locality', locality)
router.use('/location', location)

module.exports = router;