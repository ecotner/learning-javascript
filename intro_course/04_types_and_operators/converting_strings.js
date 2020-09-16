// can convert numbers to strings
let amount = 123;
console.log(amount.toString());
console.log(amount); // sort of automatically gets cast

amount = 123.456;
console.log(amount.toString()) // works with floats too


// can also convert strings to numbers
amount = "123";
console.log(Number.parseInt(amount) - 23);
amount = "123.456";
console.log(Number.parseFloat(amount) / 2);


// if we try to parse a string that doesn't start with a digit, we get `NaN`
amount = "A123";
console.log(Number.parseInt(amount));
// but if it does start with a digit, it returns something (even if the string
// in its entirety is not a number). this seems very dangerous.
amount = "123A";
console.log(Number.parseInt(amount)); // 123