/*------------------ CONDITIONAL STATEMENT -------------------------*/

// IF AND ELSE

let hour = 11;
if (hour >= 6 && hour < 12) console.log('Good Morning');
else if (hour >= 12 && hour < 18) console.log('Good Afternoon');
else console.log('Good Evening');

// SWITCH CASE

let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'Moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}

/*------------------ LOOPS -------------------------*/

// FOR LOOP

for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// WHILE LOOP

let i = 0;
while (i < 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// DO WHILE LOOP
let num = 10;
do {
  console.log(num);
  num++;
} while (num < 0);

// FOR IN LOOP (We use for in loop to iterate over property of an object)
const person = {
  name: 'Sachin',
  age: 42
};

for (let key in person) {
  console.log(key, '=', person[key]);
}

// NOTE: we can also use for_in loop on Arrays but it is not ideal way from ES6 we have for_of loop for array
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index, '=', colors[index]);
}

// FOR OF LOOP (We use for of loop to iterate over item of an array)

const cars = ['audi', 'bmw', 'honda', 'maruti'];
for (let car of cars) {
  console.log(car);
}

// BREAK AND CONTINUE KEYWORD
let e = 0;
while (e < 10) {
  if (e === 5) {
    break;
  }
  console.log(e);
  e++;
}

let number = 0;
while (number < 10) {
  if (number % 2 === 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}

// NOTE: using continue is not recommended never use it
