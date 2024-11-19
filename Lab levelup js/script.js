// Exercise 1.1 - Swap variables in one line
let v1 = 1, v2 = 2;
[v1, v2] = [v2, v1];

// Exercise 1.2 - Concatenate arrays
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

// Solution using spread operator
const combined = [...numbers, ...letters, ...foods];

// Exercise 1.3 - Decompose string to array
const str = "Hello";
const chars = [...str]; // ['H', 'e', 'l', 'l', 'o']

// Exercise 1.4 - Rest parameter examples
function fn(a, b, ...args) {
    console.log(args);
}
// a) fn(1,2,3,'A','B','C') -> args will contain [3,'A','B','C']
// b) fn(1,2) -> args will be an empty array []
// c) fn(...['a','b','c','d']) -> args will contain ['c','d']

// Exercise 2 - Converting to ES2015

// 2.1 Map conversion
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);

// 2.2 Double function conversion
const double = arr => arr.map(val => val * 2);

// 2.3 Object destructuring
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { numbers: { a, b } } = obj;

// 2.4 Add function conversion with default parameters
const add = (a = 10, b = 10) => {
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    return a + b;
};

// Exercise 3.1 - Remove duplicates using Set
const setOne = arr => [...new Set(arr)];

// Exercise 3.2 - Remove specified values
const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));

// Example usage:
console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); // [4, 5, 2, 3, 1]
console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x')); // ['a', 'c', 'd', 'f', 'g']