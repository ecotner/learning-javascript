function showProductId() {
    let productID = 12345;
    console.log(productID);
}

showProductId();

// `productId` not accessible because only defined in function's
// local scope
// console.log(productId); // ReferenceError


function outer() {
    let x = 9023490;
    function inner() {
        let x = 13424532;
        console.log("in inner: ", x); // overwritten by local scope of `inner`
    }
    inner();
    console.log("in outer: ", x); // still within scope of `outer`, but not in `inner`
}

outer();