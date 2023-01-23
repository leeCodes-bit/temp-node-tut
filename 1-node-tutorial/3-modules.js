// CommonJS, every file in node is a module (By default)
// Modules - encapsulated code (only share minimum(what we want))

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(data);

sayHi("Lilian")
sayHi(names.orevah)
sayHi(names.zino) 