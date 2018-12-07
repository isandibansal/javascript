// Object Literal
let person = {
  name: 'Max',
  age: 33,
  sex: 'male',
  address: {
    street: 'Street new city',
    city: 'Delhi'
  }
};

// NOTE: We can access object properties via two ways 1. Dot Notation and Bracket Notation

// DOT Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Robert';

console.log(person.name);

// NOTE: which approach is best?
// Bracket Notation is useful when we don't know the targeted property name.
