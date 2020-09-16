// even though count does not satisfy the conditional, the loop body executes
// at least once
let count = 1;
do {
    console.log(count);
    count++;
} while (count < 0);