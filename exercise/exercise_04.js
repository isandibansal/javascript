// FizzBuzz Exercise
// Write a function fizzBuzz which takes a number and returns based on input
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => same input
// If the input is not a number => 'Not a Number'

function fizzBuzz(num) {
  if (typeof num !== 'number') return 'Not a Number';
  else if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';
  else return num;
}
console.log(fizzBuzz(12));
