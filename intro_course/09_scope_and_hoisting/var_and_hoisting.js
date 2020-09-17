// no problem using a variable before it's declared, as long as
// it's been declared with `var`. this is referred to as "hoisting"
x = 456;
console.log(x);
var x = 123;

// if we use `let` or `const` though, then we get the expected `ReferenceError`
try {
    y = 456; // would throw an error
    console.log(y);}
catch { }
let y = 123;

// functions are also hoisted. this is because the script executes in two passes.
// the first pass grabs all function definitions and moves them to the top of the
// scope, and then the second actually executes it
func(); // hasn't been declared yet, but still works

function func() {
    console.log("abc");
}

