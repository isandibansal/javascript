// Write a function which calculate the avg marks and then corresponding grade of it
// 00 - 59 F
// 60 - 69 D
// 70 - 79 C
// 80 - 89 B
// 90 - 100 A

const marks = [70, 70, 70];

function calculateAvg(array) {
  let sum = 0;
  for (let value of array) {
    sum = sum + value;
  }
  return sum / array.length;
}

function calculateGrade(marks) {
  const average = calculateAvg(marks);
  if (average < 60) return 'GRADE F';
  if (average < 70) return 'GRADE D';
  if (average < 80) return 'GRADE C';
  if (average < 90) return 'GRADE B';
  return 'GRADE A';
}

console.log(calculateGrade(marks));
