//! Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const input1 = [1, -4, 12, 0, 3, 29, -150];

let y = input1.filter((a) => a > 0).reduce((a, b) => a + b, 0);
console.log(y);
