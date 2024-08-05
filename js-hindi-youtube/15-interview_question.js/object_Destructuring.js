/** What is Object Destructuring :- Object destructuring is a unique technique that allows
  you to neatly extract an object's properties into new variables.

  (or):- Object destructuring  allow to unpack and assign object properties 
  into individual variables. 
**/
//Ex:-
// const person = {
//   name: "Ajit",
//   age: 25,
//   job: "mern developer",
// };
// const { name, age, job } = person;
// console.log(`${name},${age},${job}`);

//(or)  Nested Destructuring 👎
/*const person = {
  name: "Rohini",
  age: 25,
  location: {
    city: "Bengluru",
    country: "India",
  },
};
const {
  name,
  location: { city },
} = person;
console.log(`My Name ${name}, current city ${city}`);*/

//(or) Renaming Variables 👎
/*const person = {
  name: "Ajit ",
  age: 25,
};
const { name: fullName, age: years } = person;
console.log(`My Full Name ${fullName}, current Years ${years}`);
*/

//(or) Default Values 👍
const person = {
  name: "Ajit",
  age: 25,
};
const { name, gender = "Male" } = person;
console.log(`My Name ${name}, Gender ${gender}`);
