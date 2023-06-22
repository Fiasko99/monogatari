const Router = require('express');
const router = new Router();

// @internal
const user = require("./user")
const character = require("./character")
const state = require("./state")
const locality = require("./locality")
const location = require("./location")
const post = require("./post")

router.use('/user', user)
router.use('/character', character)
router.use('/state', state)
router.use('/locality', locality)
router.use('/location', location)
router.use('/post', post)

module.exports = router;