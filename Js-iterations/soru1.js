// Square the value of every element in the array. Presume that you will only get numbers in the input array.
const input = [1, 2, 3, 4, 5];
// let x = input.map(myFunction);
// function myFunction(a) {
//   return Math.pow(a, 2);
// }
// console.log(x);
let x = input.map((a) => Math.pow(a, 2));
console.log(x);
