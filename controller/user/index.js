// @internal
const { userService, tokenService } = require('../../service/index');

async function signin(req, res, next) {
  try {
    const { login, email } = await userService.check(req.body);
    const { accessToken, refreshToken } = tokenService.generateTokens({ login, email })
    res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    res.json({ accessToken })
  } catch (e) {
    next(e)
  }
};

async function get(req, res, next) {
  try {
    const user = await userService.get(req.params);
    res.json(user)
  } catch (e) {
    next(e)
  }
};

async function signup(req, res, next) {
  try {
    const { login, email } = await userService.create(req.body);
    const { accessToken, refreshToken } = tokenService.generateTokens({ login, email })
    res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    res.json({ accessToken })
  } catch (e) {
    next(e);
  }
};


module.exports = {
  signin,
  get, 
  signup,
};