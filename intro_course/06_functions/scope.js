let key = 42; // declared in global scope

function getSecretCode(value) {
    let keyGenerator = function() {
        let key = 12; // this belongs to the local scope, global `key` is ignored
        console.log("in keyGenerator: ", key);
        return key;
    }

    let code = value * keyGenerator(); // keyGenerator returns 12
    console.log("in getSecretCode: ", key) // `key` here is the one defined in global scope, 42
    return code;
}

let secretCode = getSecretCode(2); // 2 * 12 = 24
console.log(secretCode);
