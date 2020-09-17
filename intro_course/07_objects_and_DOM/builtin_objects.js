// for more documentation, a list of objects, etc:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// the `Date` object is actually more like a datetime
let now = new Date();
console.log(now.toDateString()); // whatever the date is

// there is a math library!
console.log(Math.abs(-42)); // 42
console.log(Math.random()); // some number between [0, 1)

// specialized string methods
let s = "Hello";
console.log(s.charAt(0)); // "H"
