/** What is Hoisting in js :- A javascript mechanism where variables with 'var' and 'function'
declarations are moved to the top of scope before code execution.
=> function declarations are properly hoisted (not arrow function).
=> var is hoisted.
**/

//Ex:-
// myPlace = "Patna"; //var is hoisted
// console.log(myPlace);
// var myPlace; // Variable Declaration

//(or)
// let myName = "Ajit";
// sayHi(); //valid calling

// function sayHi() {
//   let lastName = "kumar";
//   console.log(myName, lastName);
// }

// sayHello(); //Not valid calling Error
// let sayHello = () => {
//   console.log(myName);
// };

//(or) Hamesa Declaration hoisted hote hai
console.log(a);
greet();
function greet() {
  console.log("Good Morning");
}
var a = 10; // Declaration hoisted to the top but initialization is not
console.log(a);
