// create an empty array
let values1 = [];

// create AND initialize array; both methods are equivalent
// can use elements of any data types, and even mix types
let values2 = [1, 2.0, "3"];
let values3 = Array.of(1, 2.0, "3");
console.log(values3); // [1, 2.0, '3']

// arrays are actually objects
console.log(typeof values3); // object

// access array elements using bracket notation []
console.log(values3[0]); // 1; arrays are zero-indexed
console.log(values3[1]); // 2.0
console.log(values3[2]); // "3"
// accessing out-of-bounds elements isn't an error, it just returns `undefined`! sounds dangerous...
console.log(values3[1000]); // undefined

// can modify elements
values3[0] = "a";
console.log(values3[0]); // "a"