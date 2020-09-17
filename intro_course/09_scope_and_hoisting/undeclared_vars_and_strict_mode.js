'use strict';

x = 1234;
console.log(x); // still gives `1234` if "use strict" not specified
// this is because `x` implicitly gets assigned to the `window` object:
// console.log(window.x); // `window` only defined when used in HTML though


y = 1234; // if "use strict" IS specified, then this throws an error
console.log(y);