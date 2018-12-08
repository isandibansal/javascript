// Write a function which takes an object as an and return the string properties only
const person = {
  name: 'Jhon Mila',
  age: 33,
  hobbies: 'Cricket',
  height: 6.1
};

function ShowProperties(object) {
  for (let key in object) {
    if (typeof object[key] === 'string') {
      console.log(`${key} ${object[key]}`);
    }
  }
}

ShowProperties(person);
