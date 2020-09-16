// a function that accepts a single parameter
function showMessage(msg) {
    console.log(msg);
}

// we can execute it as many times as we want
showMessage("First message");
showMessage("Second message");1


// a function that accepts two parameters
function showMessages(msg1, msg2) {
    console.log(msg1);
    console.log(msg2);
}

showMessages("Third message", "Fourth message")

// a function that accepts a variable number of arguments!
function showManyMessages() {
    // didn't mention this before, but can iterate over arrays, lists, strings, ...
    for (const arg of arguments) {
        console.log(arg);
    }
}

showManyMessages(
    "Fifth...",
    "Sixth...",
    "Seventh...",
    "Eigth..."
)