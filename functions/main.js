// Declaring a function
function square(number) {
  return number * number;
}

// Calling a function
console.log(square(5));


// Hoist
console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25

// Default parameters
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5); // 5

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5

// The following variables are defined in the global scope
let num1 = 20;
let num2 = 3;
let name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2;
  var num2 = 3;

  // function add() {
    return `${name} scored ${num1 + num2}`;
  // }

  // return add();
}

getScore(); // Returns "Chamakh scored 5"

// Recursion
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}

function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);

// Nested Functions
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8

// Function as expression
// An expression is a block of code that evaluates to a value. A statement is any block of code that is performing some action. The distinction between an expression and a statement is important because an expression is a subset of a statement.

const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12


// Predefined functions
console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false
