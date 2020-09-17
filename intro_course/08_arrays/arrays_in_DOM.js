// get "array" (actually HTMLCollection) of header elements
let els = document.getElementsByClassName("header");
console.log(els);

// make some modifications to the 4th element
setTimeout(function() {
    els[3].style.color = "red"; // change color
}, 500);
setTimeout(function() {
    els[3].style.display = "none"; // hide it
}, 1000)