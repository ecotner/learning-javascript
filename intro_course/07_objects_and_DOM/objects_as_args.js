let message = "Hello";

function changeMessage(message) {
    message = "Hi";
}

changeMessage(message); // doesn't actually change message; normal types are pass-by-value
console.log(message); // "Hello"

let person = {
    name: "John",
    age: 32,
    partTime: false,
}

function incrementAge(person) {
    person.age++;
}

incrementAge(person); // actually modifies the attribute; objects are pass-by-value
console.log(person.age); // 33