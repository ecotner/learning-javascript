let message = "Hello";
message = message + " world"; // can concatenate strings together
console.log(message);
message = message.toLowerCase(); // strings have useful methods that can perform operations on them
console.log(message);
message = message.substring(1);
console.log(message);
message = message.length; // this is an integer
console.log(message);
console.log(typeof message);

message = "123";
console.log(message + 2); // converts `2` to a string first, then concatenates
