let message = "Hello world";
console.log(message);

message = "Hello \"world\""; // have to escape quotes with `\`
console.log(message);

let myName = "Eric";
message = `Hello ${myName}`; // can "interpolate" strings with backticks
console.log(message);

// backticks do multiline
message = `this is

a multiline  // be careful, this "comment" is part of the string now



message`;
console.log(message);
