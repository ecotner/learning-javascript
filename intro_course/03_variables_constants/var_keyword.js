// the following 2 lines will throw an error because `var1` is used before
// it is defined.
console.log(var1);
let var1 = 25;

// however, when using `var` instead of `let` to decalare variables, this
// error does not occur... the code just fails silently and logs `undefined`
console.log(var2);
var var2 = 25;

// the reason this occurs is because `let` and `var` have different scoping
// rules. `let` is only scoped to enclosing blocks { }, whereas `var` is
// scoped to the entire function body. since we are writing code at the
// global level, variables declared with `var` are in scope everywhere,
// even before they're declared (this is called "hoisting").

// also, you can declare the same variable twice with `var`, but not with `let`
var a = 1;
var a = 2; // this is fine

let b = 1;
let b = 2; // this should fail