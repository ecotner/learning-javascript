let saved; // initialized to `undefined`
console.log(saved);

saved = 10;
saved = null; // `null` is kind of like `None` in python; typically used for default argument
console.log(saved);

console.log(null == null); // `null` is equal to itself
console.log(null === null); // it is also a singleton (all instances of `null` are the same object)
console.log(NaN == NaN); // `NaN` is not equal to itself (numerical computations could accidentally return true comparisons otherwise)
console.log(null == NaN); // `NaN` and `null` are not the same
console.log(undefined == null); // this is true... why?
console.log(undefined === null); // this is false
console.log("ba" + NaN + "a"); // returns the string "baNaNa"... wtf? beware of casts