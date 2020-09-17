// indexOf
let values = ['a', 'b', 'c'];
console.log(values.indexOf('c')); // 2
console.log(values.indexOf('d')); // returns -1 when element isn't in array

// filter
const set = values.filter(function(item) {
    return item > 'b'; // returns only items that satisfy this constraint
});
console.log(set); // ['c']

// find
values = ['a', 'bbb', 'c'];
const found = values.find(function(item) {
    return item.length > 1; // finds the first element satisfying this criteria
})
console.log(found); // 'bbb'

// forEach
values = ['a', 'b', 'c']
values.forEach(function(item) {
    console.log(item); // simply logs out each element in the array
})