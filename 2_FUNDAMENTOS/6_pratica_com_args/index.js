//módulo externo
const minimist = require('minimist')

//módulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //parseInt converte string em números inteiros
const b = parseInt(args['b'])

soma(a,b)

