//(1)  Primitive (or) Call by value hote hai

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

//(2) Reference (or) Non primitive (or) Call by Reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Ajit",
  age: 22,
};

// const myFunction = function () {
//   console.log("Hello world");
// };
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Primitive DataType use in Stack  Memory
// Ex :-copy hi milata hai
/*let myName = "Ajitkumar";
let anotherName = myName;
anotherName = "Mukulkumar";
console.log(myName);
console.log(anotherName);*/

// Non-Primitive DataType use in Heap Memory
//Ex:-Re-reference hi milata hai
/*let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "mukul@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);*/
