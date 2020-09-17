// push
const values = ['a', 'b', 'c']; // even though `values` is const, we can still modify it?
values.push('d'); // appends 'd' to the end of the array
console.log(values); // ['a', 'b', 'c', 'd']

// pop
const last = values.pop(); // removes the LAST element from the array and returns it
console.log(last); // 'd'

// shift
const first = values.shift(); // removes the FIRST element from the array and returns it
console.log(first); // 'a'

// unshift
values.unshift("a"); // adds element to the BEGINNING of the array
console.log(values); // ['a', 'b', 'c']

// slice
const newValues = values.slice(1, 2); // like `values[1:2]` in python
console.log(newValues); // ['b']
console.log(values); // ['a', 'b', 'c']; leaves the original alone, only returns copy
newValues[0] = 'asdf' // this does NOT modify `values[1]`
console.log(values); // ['a', 'b', 'c']

// splice
values.splice(0, 1); // deletes 1 element, starting from position zero (in-place)
console.log(values); // ['b', 'c']
values.splice(1, 0, "foo"); // starting at element 1, deletes 0 elements, and inserts "foo" BEFORE the next element
console.log(values); // ['b', 'foo', 'c']