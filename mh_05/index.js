// OPERATORS

// 1. Arithmetic
// 2. Assignment
// 3. Comparision
// 4. Logical
// 5. Bitwise

// NOTE: ARITHMETIC OPERATORS
let x = 10;
let y = 5;
let z;

z = x + y;
z = x * y;
z = x / y;
z = x % y; // Remainder of devision
z = x - y;
z = x ** y; // This means x to the power of y

// Increment and Decrement
z = ++x;
z = x++;
z = --y;
z = y++;

z += x; // z = z + x; (shorthand)

console.log(z);

// NOTE: ASSIGNMENT OPERATORS
let something = 'something'; // = is an asignment

// NOTE: COMPARISION OPERATORS
let a = 10;
let c;

c = a > 0;
c = a >= 10;
c = a < 1;
c = a <= 10;
c = a == '10'; // True (==) doesn't check the type of value (Loose Equality Operator)
c = a === '10'; // False (Strict Equality Operator) this will check value and type both

console.log(c);

if ('0' == false) {
  console.log('This is will print');
}

let age = 20;
age >= '18' ? console.log('Adult') : console.log('Minor');

// NOTE: LOGICAL OPERATORS
// &&, ||, !

// Logical AND (&&) Returns true if both operands are true
console.log(true && true);
// Logical OR (||) Returns true if one operands is true
console.log(true || false);
// Logical NOT (!)
console.log(!true);

// Logical operators with non-booleans value
// NOTE: the result of logical expression is not always true or false that depends on the value of operands
// When there is a value which is not boolean JavaScript engine takes them as truthy or falsy
// Falsy (0, null, undefined, '', false, NaN)
console.log(true && 'sandeep');
console.log(true && 1);
if (true && 1) {
  console.log('ooh no');
}

// Real world scenerio
let userColor = undefined;
let defaultColor = 'black';
let currentColor = userColor || defaultColor; // here undefined is falsy so black is the current color
console.log(currentColor);

// OPERATOR PRECEDENCE
// Use paranthesis not to confuse
