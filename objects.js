// //! Using an Object Literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// //! Using the JavaScript Keyword new
// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

//! JavaScript Objects are Mutable ***********
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const x = person;
// x.age = 10; // Will change both x.age and person.age

// console.log(person);
// console.log(x);

//! JavaScript Properties
//! Accessing JavaScript Properties
//* objectName.property      // person.age
//* objectName["property"]   // person["age"]
//* objectName[expression]   // x = "age"; person[x]

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue",
// };

// document.getElementById("demo").innerHTML =
//   person.firstname + " is " + person.age + " years old.";

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue",
// };

// document.getElementById("demo").innerHTML =
//   person["firstname"] + " is " + person["age"] + " years old.";

//!JavaScript for...in Loop
const person = {
  fname: " John",
  lname: " Doe",
  age: 25,
};

for (let x in person) {
  txt += person[x];
}
//!Adding New Properties
person.nationality = "English";
//!Deleting Properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person.age;
