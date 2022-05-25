// Calculate the mean and median values of the number elements from the input array.
// { mean: 38.5, median: 39 }

const input = [12, 46, 32, 64];
let mean = input.sort((a, b) => a - b).reduce((a, b) => a + b) / input.length;
console.log(mean);
if (input.length % 2 == 0) {
  //   input.sort((a, b) => a - b);
  let z = (input[input.length / 2] + input[input.length / 2 - 1]) / 2;
  console.log(z);
} else {
  let v = input[Math.floor(input.length / 2)];
  console.log(v);
}
