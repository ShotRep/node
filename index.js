//shows us what going on in the background
// console.log(arguments)

// const message = require("./myscript.js")
// console.log(message)

// const message = require('./myscript.js')
// console.log(require.cache)

const counterObject = require('./myscript.js')

console.log(counterObject.getCounter())  // 0
counterObject.incrementCounter()         // increment by 1
console.log(counterObject.getCounter())  // 1

const newCounterObject = require("./myscript.js")  //this will ot rerun the js file
console.log(newCounterObject.getCounter())  // 1    //it pulls from require cache 
