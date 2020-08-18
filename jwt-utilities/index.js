const jwt = require('jsonwebtoken')

const [, , options, secret, nameOrToken] = process.argv

if (!options || !secret || !nameOrToken) {
  return console.log('Missing arguments')
}

function signToken(payload, secret){
  return jwt.sign(payload, secret)
}

function verifyToken(token, secret){ 
  return jwt.verify(token, secret)
}

if(options ==  'sign'){
  console.log(signToken({ sub: nameOrToken }, secret))
} else if (options ==  'verify') {
  console.log(verifyToken(nameOrToken, secret))
} else {
  console.log('Options need to be "sign" or "verify"')
}