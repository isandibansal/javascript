// FUNCTIONS
function greet(name) {
  console.log('Hello!', name);
}

// We can also declare functions as a variable
let something = function() {
  console.log('This is something');
};

something();
greet('John Doe'); // John Doe is an argument, while name is a parameter of a function

// Functions with mulitple parameter also we can set default value as well
function sayHello(firstName, lastName = 'Bansal') {
  console.log('Hello', firstName, lastName);
}

sayHello('Sandeep');

// We can also return some value from the function
function sqaure(num) {
  return num * num;
}

let result = sqaure(4);
console.log(result);
