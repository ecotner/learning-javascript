// get our button element from the DOM
const button = document.getElementById("my-button");
const origBtnTxt = button.textContent;

// add an event listener to the button that listens for clicks
button.addEventListener("click", function(event) {
    // get the hidden div
    let div = document.getElementById("toggle-panel");
    // toggle it on if it's hidden
    if (div.style.display === "none") {
        div.style.display = "block";
        button.textContent = "Hide it!"
    // toggle it off if it's visible
    } else {
        div.style.display = "none";
        button.textContent = origBtnTxt;
    }
})

// add an event listener that listens for "mouseenter" events
// basically when your mouse "enters" the button's space
button.addEventListener("mouseenter", function(event) {
    // create a div and some text
    let div = document.createElement("div");
    let txt = document.createTextNode("Bet you won't click it!")
    // set the position and attributes of the div
    div.style.position = "absolute";
    div.style.left = event.pageX;
    div.style.top = event.pageY;
    div.style.backgroundColor = "white";
    // this makes it transparent to your mouse
    div.style.pointerEvents = "none";
    // add the text to the div, the div to the body
    div.appendChild(txt);
    document.body.appendChild(div);
    // after 0.5 seconds, remove the div
    setTimeout(function() {
        div.remove();
    }, 500);
})