const cars = ["Saab", "Volvo", "BMW", { firstCar: "Hyundai" }];
let car = cars[0]; //! Accessing Array Elements
console.log(car);
cars[2] = "Opel"; //!Changing an Array Element
console.log(cars);

const ab = ["a", "b"];
cars.concat(ab);
console.log(cars.concat(ab));

//!The length Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

//! Accessing the First Array Element
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits[0];
console.log(fruit1);

//!Accessing the Last Array Element
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits[fruits.length - 1];
console.log(fruit2);

//!Looping Array Elements
//* FOR
const arr = [1, 2, 3];
const arr1 = [];

for (let i = 0; i < arr.length; i++) {
  let b;
  b = arr[i] ** 2;
  arr1.push(b);
}
console.log(arr1);

//* FOR EACH
const arr3 = [1, 2, 3];
arr3.forEach(square);
function square(num) {
  console.log(num ** 2);
}

//! Adding Array Elements
const fruits5 = ["Banana", "Orange", "Apple"];
fruits5.push("Lemon"); // Adds a new element (Lemon) to fruits to the end
console.log(fruits5);
fruits5[fruits5.length] = "Kiwi"; // Adds "Lemon" to fruits
console.log(fruits5);

//! Associative Arrays
//JavaScript does not support arrays with named indexes.

//In JavaScript, arrays always use numbered indexes.
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"
console.log(person);

//!                Creatin a array with "new"
const points = new Array(40, 100, 1, 5, 25, 10);
const points1 = [40, 100, 1, 5, 25, 10];
console.log(points);
console.log(points1);

//!                 How to Recognize an Array
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);

//* =====================================
//*        JavaScript Array Methods
//* =====================================

//!         Converting Arrays to String
const arr4 = [1, 2, 3];
console.log(arr4.toString());
console.log(typeof arr4, arr4.length);

//!    The join() method also joins all array elements into a string.
const str = arr4.join(); //? arrayi stringe dönüştürür
console.log(str, typeof str);
const str1 = arr4.join(""); //? aradaki virgülleri kaldırır
console.log(str1);
const str2 = arr4.join(" "); //? Elemanları boşluklarla ayırır
console.log(str2);
const str3 = arr4.join("+"); //? Elemanlarıı artılarla ayırır
console.log(str3, str3.length);

//!      Popping and Pushing
const fruits99 = ["Banana", "Orange", "Apple", "Mango"];
fruits99.pop(); // Son elemanı siler
console.log(fruits99);
fruits99.push("kiwi"); // sonuna ekledi
console.log(fruits99);
//!    JavaScript Array shift()

fruits99.shift(); // başından eleman sildi
console.log(fruits99);
fruits99.unshift("Lemon"); // başına ekler
console.log(fruits99);

//! DELETE
delete fruits99[0];
console.log(fruits99);

//! Merging (Concatenating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//! Splicing and Slicing Arrays
const lang = ["js", "phyton", "html", "css", "react"];
lang.splice(2, 0, "php"); //! 2. indekse gel,hiçbirini silme,php ekle
console.log(lang);
lang.splice(2, 1, "PHP"); //?  2. indekse gel,tek elemanı sil,php ekle
console.log(lang);
lang.splice(2, 1); //? 2. indekse gel 1 elemanı sil
console.log(lang);

console.log(lang.slice(2)); //? 2. indeksten sonrasını al getir. 2. indeksi dahil et
console.log(lang.slice(2, 4)); //? 2. indeksi al 4.indeski alma

//!Finding Max and Min Values in an Array

//! JavaScript Sorting Arrays
const frui = ["Banana", "Orange", "Apple", "Mango"];
console.log(frui.sort()); // orijinali değişir
console.log(frui.reverse()); // orijinali değişir
//! Numeric Sort
const points13 = [40, 100, 1, 5, 25, 10];
points13.sort(function (a, b) {
  return a - b;
});
console.log(points13);

//! Sorting an Array in Random Order
points13.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log(points13);

//! Using Math.max() on an Array
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(points13));

//! Using Math.min() on an Array
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points13));

//* =====================================
//*        JavaScript ITERATION
//* =====================================

//! JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction1);

function myFunction1(value) {
  return (txt += value + " ");
}
console.log(typeof txt, txt);

//! JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2);

//! JavaScript Array filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
