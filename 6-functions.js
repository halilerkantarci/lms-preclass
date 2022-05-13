// function sayHi() {
//   return "Hi!";
// }
// function sayHi2() {
//   console.log("Hello!");
// }
// sayHi();
// sayHi2();

// function sayHi3(userName) {
//   console.log(`Hello! ${userName}`);
// }
// sayHi3("Mark");
// sayHi3();

// function sayHi4(userName, company) {
//   console.log(`Hello! ${userName} of ${company}`);
//   company = "Apple";
//   console.log(`Hello! ${userName} of ${company}`);
// }
// let userName = "Mark";
// let company = "Clarusway";
// sayHi4(userName, company);
// console.log(company);
// sayHi4("Matthew");

// var anObj = { name: "Matthew" };
// console.log(anObj);
// // {name: "Matthew"}

// function changeObj(obj) {
//   obj.name = "Mark";
// }
// changeObj(anObj);
// console.log(anObj);
// // {name: "Mark"}

// function changeObj2(obj) {
//   obj = { name: "Mike" };
// }
// changeObj2(anObj);
// console.log(anObj);
// // {name: "Mark"}

// greet();
// function greet() {
//   console.log("Hello");
// }
// greet();
// let greet = function () {
//   console.log("Hello");
// };

// let area;
// let calculate = function (width, height) {
//   area = width * height;
//   return area;
// };
// console.log(calculate(3, 5));

// // Named function
// function sayHi() {
//   return "Hello!";
// }
// console.log(sayHi());
// // Anonymous function
// const sayHi2 = function () {
//   return "Hello!";
// };
// console.log(sayHi2());

// // anonymous function expression
// const sayHi = function () {
//   console.log("Hello!");
//   console.trace();
// };
// // named function expression
// const sayHi2 = function greet() {
//   console.log("Hello!");
//   console.trace();
// };
// sayHi();
// sayHi2();

//!Arrow Functions
// const calculate = (width, height) => {
//   const area = width * height;
//   return area;
// };
// console.log(calculate(3, 5));

// function f3(a, b) {
//   return a + b + 100;
// }
// //kısaltılmış hali
// (a, b) => a + b + 100;

// // Regular Function
// function hundredify(a) {
//   return a + 100;
// }

// // Arrow Function
// let hundredify = (a, b) => a + b + 100;
// console.log(hundredify(3, 4));

// let num1 = 10;
// var num2 = 20;
// console.log("at the global scope");
// console.log({ num1, num2 });
// func1();
// console.log({ num1, num2 });
// console.log({ num3, num4 });

// // function declaration
// function func1() {
//   let num1 = 101;
//   let num2 = 102;
//   var num3 = 103;
//   console.log("..inside func1");
//   if (num1 < num2) {
//     console.log("inside if block");
//     let num1 = 201;
//     // var num2 = 205;
//     console.log({ num1, num2 });
//     console.log({ num3, num4 });
//     // let num3 = 206;
//     var num4 = 204;
//     num1++;
//     num2++;
//     num3++;
//     num4++;
//     console.log({ num1, num2 });
//     console.log({ num3, num4 });
//   }
//   console.log("after if block");
//   num3++;
//   num4++;
//   console.log({ num1, num2 });
//   console.log({ num3, num4 });
// }

// function add(a, b = 3, c) {
//   console.log(a + b);
//   console.log(c);
// }

// add(3, ,7) //error
// add(2, true, 9); //true=1 a+b=2+1
// add(2, false, 9); //false=0 a+b=2+0
// add(3, "", 9); // '3',9

function add(a, b) {
  console.log(a + b);
}
let result = add(3, 4);
console.log(result);
console.log(add(3, 4));

function add1(a, b) {
  return a + b;
}
let result1 = add1(3, 4);
console.log(result1);
console.log(add1(3, 4));
