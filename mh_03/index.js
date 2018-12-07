// ARRAYS (Array is a data structure to represent list of items)
let selectedColors = ['red', 'brown']; // Array Literal

console.log(selectedColors);
console.log(selectedColors[1]);

selectedColors.push(23); // We can add another item with different type b/c JavaScript is Dynamic type

console.log(selectedColors);
console.log(typeof selectedColors); // In JavaScript Arrays are objects

// Because of Arrays are object in JavaScript we can use Dot notation and Bracket Notation
selectedColors['push']('once more');
console.log(selectedColors);
console.log(selectedColors.length);
