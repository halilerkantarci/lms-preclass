// {
//   var x = 2;
// }
// // x CAN BE used here

// {
//   let x = 2;
// }
// // x CAN NOT be used here

// let x = 10;
// var q = 100;
// const e = 1000;

// {
//   let x = 20;
//   console.log(x);
//   var q = 200;
//   console.log(q);
//   const e = 2000;
//   console.log(e);
// }
// console.log(x);
// console.log(q);
// console.log(e);

//! FONKSİYONUN İÇİNDE OLAN FONKSİYONUN İÇİNDE ÖLÜR
let sum = 0;
var memo = 1;
function topla(a, b) {
  var memo = 3 + 5;
  let selman = a + b;
  console.log(memo);
  return selman;
}
console.log(topla(3, 5));
console.log(memo);

var sayi1 = 1000000000;
let sayi2 = 10;
{
  let sayi2 = 2000;
  console.log(sayi2);
  var sayi1 = 20;
}
console.log(sayi1);
console.log(sayi2);

let sayi5 = 5;
const fonk2 = function () {
  sayi2 = 10;
  console.log(sayi5);
};
fonk2();
console.log(++sayi5);

//**************** */
let x = 10;
var q = 100;
const e = 1000;

function xy() {
  let x = 20;
  x = 20 + 5;
  console.log(x);
  var q = 200;
  console.log(q);
  const e = 2000;
  console.log(e);
}
xy();
console.log(x);
console.log(q);
console.log(e);
