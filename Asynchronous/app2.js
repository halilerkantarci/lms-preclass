// callback,promise,async/await ---> asenkron programlamayı yönetmek için
// xmlhttprequest, fetch api --> http işlemleri

//-----------------------------

// let surname = "";

// function getName(callback1) {
//   setTimeout(() => {
//     surname = "mert";
//     callback1(surname);
//   }, 2000);
// }

// getName(function (callback2) {
//   console.log(callback2);
// });

function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
