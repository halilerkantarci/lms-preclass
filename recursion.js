//! PROGRAM TO COUNT DOWN NUMBERS TO 1
function countdown(number) {
  console.log(number);
  const newNumber = number - 1;
  if (newNumber > 0) {
    countdown(newNumber);
  }
}
countdown(4);

//************************************************** */
// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

//**************************************** */
function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else {
    return base * power(base, exp - 1);
  }
}
var result2 = power(2, 5);
console.log(result2);
