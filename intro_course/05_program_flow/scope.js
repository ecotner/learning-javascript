// `var` does NOT go out of scope, so this works just fine
if (true) {
    var val1 = "val1";
    console.log(val1);
}
console.log(val1);

// `let` DOES go out of scope once you leave the { }, so this throws an error
if (true) {
    let val2 = "val2";
    console.log(val2);
}
console.log(val2);