// TRUTHY and FALSY counter
// FALSY list
// 1. undefined
// 2. null
// 3. ''
// 4. false
// 5. 0
// 6. NaN

const arr = ['sandeep', 1, 2, 3, '', null, undefined, NaN];

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(arr));
