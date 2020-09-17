// the Document Object Model (DOM) is how modern webpages are constructed.
// there is a single global object called `document` that represents the entire
// webpage. the document has many child elements, which themselves can have more
// children, and so on... it is a tree-like structure with `document` at the rooto

function changeMessage(text) {
    let el = document.getElementById("message"); // gets the element with `id="message"`
    el.textContent = text; // changes the text (the stuff in between the <h1></h1> tags)
}

function changeColor(color="red") {
    let el = document.getElementById("message");
    el.style.color = color; // the `HTMLElement.style` property allows us to change style attributes of HTML elements
}
