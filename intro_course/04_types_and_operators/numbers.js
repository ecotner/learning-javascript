let price = 20.99;
console.log(typeof price);
console.log(`price before: ${price}`);
price = price + 1; // addition
console.log(`price after: ${price}`);

price = price - 2; // subtraction
price = 3 * price; // multiplication
price = price / 2; // division
price = price % 5; // modulo

// can also do in-place updates
price *= 3;
price -= 4;

// also have increment operators like C/C++
price = 12;
console.log(price++); // returns value (12), then increments (13)
console.log(++price); // increments value (13), then returns (14)
