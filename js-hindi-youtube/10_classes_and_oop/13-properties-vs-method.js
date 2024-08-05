/* Difference between properties vs method */

/*
Properties :- Properties are values associated with an object. They represent the state or 
characteristics of the object.
*/
//Ex:-
// Creating an object with properties
/*let person = {
  firstName: "Ajit",
  lastName: "kumar",
  age: 25,
  isEmployed: true,
};
console.log(person.firstName); // Accessing properties
console.log(person.age);
// Modifying properties
person.age = 28;
console.log(person.age);*/

/*
Methods :- Methods are functions that are associated with an object. They represent 
actions that can be performed by the object.
*/
// Creating an object with methods
let car = {
  brand: "Toyota",
  model: "BMW",
  year: 2020,
  start: function () {
    console.log("The car has started.");
  },
  getInfo: function () {
    return `${this.brand} ${this.model}, ${this.year}`;
  },
};
// Calling methods
car.start();
console.log(car.getInfo());
