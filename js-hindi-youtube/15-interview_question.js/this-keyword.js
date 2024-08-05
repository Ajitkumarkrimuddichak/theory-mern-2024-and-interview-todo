/** What is this keyword in js :- Depends on how to used "this keyword". **/

// Ex:-
//(1) Global Context:- When used outside any function, this refers to the global object
//console.log(this);

//(2) Function Context:- Inside a regular function, this refers to the global object
// function myFunction() {
//   console.log(this); // Current context ki bat
// }
// myFunction();

//(3) Method Context:- When used inside an object method, this refers to the object the
//method is called on.
// const obj = {
//   name: "Ajit",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// obj.greet(); // Ajit

//(4) Constructor Context:- When used in a constructor function, this refers to the newly
//created instance of the object.
// function Person(name) {
//   this.name = name;
// }
// const person1 = new Person("kumar");
// console.log(person1.name); // kumar

//(5) Arrow Functions:- Arrow functions do not have their own this. Instead, this refers
//to the lexical context, meaning it inherits this from the surrounding code.
// const obj = {
//   name: "Charlie",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// obj.greet(); // undefined
