/* What is scope in JavaScript :- In JavaScript, scope refers to the context in 
which variables, functions, and objects are accessible.
*/

/*
1) Global Scope :-
=> Variables declared outside any function or block are in the global scope.
=> These variables can be accessed from anywhere in the code.
*/

/*
2) Function Scope :-
=> Variables declared inside a function are in the function scope.
=> These variables are accessible only within that function.
*/

/*
3) Block Scope :-
=> Introduced in ECMAScript 6 (ES6) with the let and const keywords.
=> Variables declared inside a block (e.g., within {} braces) are in the block scope.
=> These variables are accessible only within that block.
*/

/*
4) Lexical Scope :-
=> Also known as static scope.
=> In JavaScript, a function's scope is determined by its location within the source code,
and nested functions have access to variables declared in their outer scopes.
*/
// Ex:-
/*function outerFunction() {
  let outerVar = "I'm outer";

  function innerFunction() {
    console.log(outerVar); // Accessible here
  }
  innerFunction();
}
outerFunction();*/

/**#####  Schop chine  ######**/
/* What is Scope Chain in JavaScript :- JavaScript engine uses scopes to find out the 
exact location or accessibility of variables and that particular process is known 
as Scope Chain.

=> Scope Chain means that one variable has a scope is used by another variable or function 
having another scope (may be global or local/function or block scope).
*/
//Ex :-
let global = 22; //Global
function main_function() {
  let local = 33; // Local
  let nested_function = function () {
    console.log(local); // Display the value inside the local
  };
  let another_nested_function = function () {
    console.log(global); // Displays the value inside the global
  };
  nested_function();
  another_nested_function();
}
main_function();
