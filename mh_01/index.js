let name; // By default the value of variable is undefined
name = 'Sandeep Bansal';
console.log(name);

const interestRate = 4;
// interestRate = 5; // We can't change the value of const
console.log(interestRate);

// NOTE: BEST PRACTICE
// If you do not want to change variable use const otherwise use let

/* ------------------------------------------------------- */
/* TYPES */
/* ------------------------------------------------------- */

// In JavaScript we have two category of types
// 1. Primitives (Value Types)
// 2. Reference Types

// PRIMITIVE TYPES
// 1. Strings
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol

let str = 'This is string'; // String literal
let age = 23; // Number literal
let isApproved = true; // Boolean literal
let something = undefined; // By default variable is undefined
let extra = null;

// NOTE: JavaScript is Dynamic type lanaguage The type of variable can be change at run time.
let x = 'This is String';
console.log(typeof x);

x = 10; // Here we have change string to number
console.log(typeof x);
