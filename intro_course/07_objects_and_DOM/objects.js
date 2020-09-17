// this is a "Symbol", not sure what it does exactly
let mySymbol = Symbol();

// an object with some attributes
let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: "secretInformation",
    showInfo: function() { // an object method definition
        console.log(this.name); // this refers to the object itself
    }
}

person.age = 33; // change attribute with . notation

console.log(person.age);

person["age"] = 44; // change attribute with [] notation

// iterate over all _visible_ attributes in the object (Symbols prevent enumeration)
for (const el in person) {
    console.log(`${el}: ${person[el]}`);
}

// call method
person.showInfo() // prints "John" to console