// javascript is not strongly typed (like python), but you do
// still need to _declare_ your variables (like C/C++/Java)

let total = 149.99; // can declare variables with `let` (other keywords exist)

let product = 'Hiking Boots'; // javascript doesn't care about single or double quotes, as long as you are consistent
// you can also use back ticks `like this ${variable}`, kind of like an f-string in python
console.log(`you bought ${product}`);
// but JSON requires double quotes

let discounted = true;

// can also do something like this
let a = 1, b = 2;
console.log(`${a} + ${b} = ${a+b}`)

// variables can only start with a `_`, `$` or alphabetical character [a-Z]
// let 123_var = 123; // this won't work
let _123_var = 123; // this does work

// if variables are declared but uninitialized, its value is `undefined`
// NOT the string "undefined", like some kind of reserved object/type `undefined`
let whoami;
console.log(`I am ${whoami}`);
// can update values with assignment operator `=`
whoami = "Eric";
console.log(`oh wait, I remember... I am ${whoami}`);