/*
(1)Implicit Type Conversion :- Compiler convert no data loss  
*/
//Ex:-

//String Concatenation:-
// let num = 123;
// let str = "The number is " + num;

//Numeric Operations:-
// let str = "123";
// let result = str * 2;
// console.log(result);

//Boolean Context:-
let value = "123";
if (value) {
  // This block will run because non-empty strings are truthy
}
let num = 0;
if (num) {
  // This block will not run because 0 is falsy
}
