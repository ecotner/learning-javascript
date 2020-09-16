// These are the things that are "falsy"
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(''))
console.log(Boolean(null ))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log();
// Pretty much everything else is "truthy"
console.log(Boolean(true));
console.log(Boolean("hello"));
console.log(Boolean(1));
console.log(Boolean(123.456));
console.log(Boolean(-123.456));
console.log(Boolean("0"));
console.log(Boolean("NaN"));
