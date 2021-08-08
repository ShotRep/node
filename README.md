<h1 align="center">NODE</h1>

<h3 align="center">The Modern Javascript Bootcamp Course (2021) part II Applications</h3>    

<!-- GETTING STARTED -->
## Getting Started
Part 2 of the modern bootcamp course, switching from classroom style to applied learning through the building of projects. 


[MDN JS Web Docs - URL](https://developer.mozilla.org/en-US/docs/Web/javascript)

[node JS - URL](https://nodejs.org/en/)

## Notes
Link 2 JS files.  Using this creates an invisible function containing. 


require: Function to get access to the exports from another file.


module: Object that defines some properties + information about the current file.


exports: Equivalent to 'module.exports'. We can technically export code using this, but it is
         easier to use 'module.exports' because of a little corner case. Use module.exports.


__filename: Full path + file name of this file.


__dirname: Full path of this file.


-shows us what going on in the background
console.log(arguments)

The require function follows the the file path to the module.exports file.
require cache:  The require cache is an object that stores the results of requiring in a file.
                It adds new keys into the object of my script with a value in this case 'hi there'

Require Cache:  running the require object a second time has no effect.  you can only run it once and after that initial run everything will be pulled from the require cache with results from the initial require object.

## Debugging Node JS
node inspect index.js: start up a debugger CLI and pause execution whenever a 'debugger' statement is hit.

node --inspect index.js: start up a debugger instance and pause execution whenever a 'debugger' statement is hit.  access the debugger at 'chrome://inspect'

node --inspect-brk index.js: start up a debugger instance and wait to executer until a debugger is connected. access the debugger at 'chrome://inspect'

CLI debugger cmds
c: continue execution until program ends or next debugger statement.
n: run the next line of code.
s: step in to a function.
o: step out of the current function.




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.