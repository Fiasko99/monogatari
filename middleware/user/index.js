const ApiError = require("../../exception")

const emptyValue = 'Пустое поле'
const validateMail = (mail) => {
  const indexSymbolDog = mail.indexOf('@')
  const indexSymbolDot = mail.indexOf('.')
  const notLast = indexSymbolDog < mail.length
  const notFirstOrnotFound = indexSymbolDog > 0
  const notAfterDot = indexSymbolDog < indexSymbolDot
  return notFirstOrnotFound && notLast && notAfterDot
}

async function signin(req, _, next) {
  const { login, password } = req.body;
  const errors = []

  !login && errors.push({ input: "login", message: emptyValue })
  !password && errors.push({ input: "password", message: emptyValue })
  if (errors.length > 0){
    throw ApiError.InputError(errors);
  }

  next();
};

function signup(req, _, next) {
  const { login, email, password } = req.body;
  const errors = []

  !login && errors.push({ input: "login", message: emptyValue })
  !password && errors.push({ input: "password", message: emptyValue })
  !email && errors.push({ input: "email", message: emptyValue })
  if (errors.length > 0){
    throw ApiError.InputError(errors);
  }

  !validateMail(email) && errors.push({ input: 'email', message: 'Неверный формат почты' })
  if (errors.length > 0){
    throw ApiError.InputError(errors);
  }

  next();
};
  

module.exports = {
  signin,
  signup,
};