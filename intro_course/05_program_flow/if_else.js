// literally exactly the same as C/C++
if (5 === 5) {
    console.log("Yes");
}

let x = 5
if (x > 10) {
    console.log("No")
} else if (x >= 5) {
    console.log("Yes")
} else {
    console.log("less than 5");
}


let state = "FL";
let taxPercent = 7;

if (state === "FL") {
    taxPercent = 0;
}
console.log(taxPercent);