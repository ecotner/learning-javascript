// "function expressions" give JS some elements of functional
// programming - functions can be passed around as variables

let fn = function() {
    console.log("inside the function");
}

fn();

// a function that takes functions as arguments!
let outer = function(inner) {
    inner();
    inner();
}

outer(fn);