// Write a function which takes a limit and return the sum of multiple 3 and 5

function sum(limit) {
  let total = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }

  return total;
}

console.log(sum(20));
