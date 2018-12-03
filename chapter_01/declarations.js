/* --------------------------------------------------- */
// Declarations (var, let and const)
/* --------------------------------------------------- */

// There are three kinds of declarations in JavaScript.
// var (Declares a variable, optionally initializing it to a value.)
// let (Declares a block-scoped, local variable, optionally initializing it to a value.)
// const (Declares a block-scoped, read-only named constant.)

/* --------------------------------------------------- */
// Evaluating variables
/* --------------------------------------------------- */

// A variable declared using the var or let statement with no assigned value specified has the value of undefined.
var x;
let y;
console.log(x);
console.log(y);

// Variable Hoisting
console.log(b);
var b;

// TODO: Variable Hoisting (un comment)
// console.log(c); // Uncaught ReferenceError: c is not defined
// let c;

// The undefined value behaves as false when used in a boolean context.
var input;
if (input) {
  console.log('true');
} else {
  console.log('false');
}

// The undefined value converts to NaN when used in numeric context.
var sum;
console.log(sum + 2);

// When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.
var n = null;
console.log(3 + null);

/* --------------------------------------------------- */
// Variable Scope
/* --------------------------------------------------- */

if (true) {
  var a = 10;
}
console.log(a);

if (true) {
  let letTest = 20;
}
// console.log(letTest); // ReferenceError: y is not defined

/* --------------------------------------------------- */
// Variable Hoisting
/* --------------------------------------------------- */

// Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as hoisting;

console.log(myVar); // It gives Undefined
var myVar = 3;

// But let solve this problem
// console.log(myLet); // Uncaught ReferenceError: myVar is not defined
let myLet = 5;

/* --------------------------------------------------- */
// Constants
/* --------------------------------------------------- */
const PI = 3.14;
// PI = 'something else'; // Can't Do This
