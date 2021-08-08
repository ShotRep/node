//shows us what going on in the background
// console.log(arguments)

// const message = require("./myscript.js")
// console.log(message)

// const message = require('./myscript.js')
// console.log(require.cache)

// const counterObject = require('./myscript.js')

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.log(counterObject.getCounter())
