let productId = 12345;

// even though `productId` is defined in the global scope, it is
// still accessible inside the function
function showProductId() {
    console.log(productId);
}

// sometimes it is common to keep all global variables within
// an `app` object so they don't pollute the global namespace
app = {
    productId: 12345,
    userName: "Joe",
    orderNumber: 789,
}

function showProductId() {
    console.log(app.productId); // access `productId` through `app`
}