/**** 
 What is Object in JavaScript :- Object is a collection of key-value pairs where each 
  key is a string, and each value can be of any data type, like objects, functions, arrays,
  and primitive data types like numbers, strings, and booleans. 
  => Objects are used to store and manipulate data in a single variable name.

  (or) Object is nothing word real  world intity.

  #### Creating an Object ####   
  (1) Object Literal :- singleton nahi banta hai
  (2) Object Constructor :- Constructor jo banata hai vahi khali singleton Hota hai
  (3) Using a Constructor Function
  (4) Using ES6 Classes

  Accessing Properties and Methods :-
  (1) Dot Notation :- c.l(JsUser.email)
  (2) Bracket Notation :- c.l(JsUser["email"])

****/

/****(1) Object Creating First way :- Object literals Declare karate hai to singleton nahi banta hai ****/

const mySym = Symbol("key1"); //interview question one Symbol lo or object ke key me add kar do.
const JsUser = {
  //Object me "Key:value" Defind karane ka Option deta hai
  name: "Ajit kumar",
  "full name": "Ajit kumar",
  [mySym]: "mykey1", //Symbol ko add kiya
  age: 18,
  location: "Patna",
  email: "ajit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(JsUser.email); // Object ko Access karane ka bahut sara tarika hai jo ki Example hai
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //Access bhi yese hi hoga
// console.log(JsUser);

// JsUser.email = "mukul@chatgpt.com";
// Object.freeze(JsUser); //koi bhi object ko freeze kar sakate hai joki koi change nahi kar payega
// JsUser.email = "ram@microsoft.com"; //agar freeze nahi hota to email change hota but hamane pahale hi freeze kar diya hai
// console.log(JsUser);

/*
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/

/****(2) Object Create Second Way :- Constructor se jo banata hai vahi khali singleton Hota hai 
=> singleton is a design pattern.
****/
//Ex:-
//const tinderUser = new Object();
//console.log(tinderUser);

/*let person = new Object();
person.firstName = "Ajit";
person.lastName = "kumar";
person.age = 25;
console.log(`Hi My name ${person.firstName}`);
person.karmaa = function () {
  console.log("Hello, my name is " + this.firstName + " " + this.lastName);
};
person.karmaa();*/

/** My own Concept in Object **/

//(3) Object Creating Third way :- Using a Constructor Function Ex:-
/*function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.karmaa = function () {
    console.log("Hello, My Name is " + this.firstName + " " + this.lastName);
  };
}
let john = new Student("Ajit", "Kumar", 26);
john.karmaa();*/

// (4) Object Creating Fourth way :- Using ES6 Classes Ex:-
/*class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  karmaa() {
    console.log("Hello, My Name is " + this.firstName + " " + this.lastName);
  }
}
let Obje1 = new Person("Ajit", "Kumar", 20);
Obje1.karmaa();
*/
