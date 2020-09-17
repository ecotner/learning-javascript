const button = document.getElementById("my-button");

// adds a "listener" to the button, so that when the "click"
// event is triggered, the (anonymous) function is executed
button.addEventListener("click", function(event){
    console.log("click");
    // ooh, can get the (x,y) coords of the mouse!
    console.log(event.pageX, event.pageY);
})