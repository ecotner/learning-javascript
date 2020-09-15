// defines a function
function showMessage(message) {
    // indentation and whitespace doesn't matter
    var el = document.getElementById("message"); // gets the element with `id="message"`
    el.textContent = message; // changes the text content of the element
}

// creates a couple of alerts
alert("Hello world!");
alert("Second message");

// calls the function
showMessage("This is the header after modifying it with javascript");
// showmessage("javascript is case-sensitive"); // this won't work

// this shows up in the browser's dev tools console
console.log("This is a console message!")