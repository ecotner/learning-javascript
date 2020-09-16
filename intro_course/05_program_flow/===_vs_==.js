// this will attempt to convert types behind the scenes
// therefore will evaluate to true
if (1 == "1") {
    console.log("true");
} else {
    console.log("false");
}

// this does not convert types, therefore evaluates to false
if (1 === "1") {
    console.log("true");
} else {
    console.log("false");
}