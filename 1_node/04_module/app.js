const {john, peter} = require('./names')
const {susan} = require('./alternative-exports')
const sayHi = require("./utils")
sayHi(john)
sayHi(peter)
sayHi(susan)