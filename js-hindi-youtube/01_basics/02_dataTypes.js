"use strict"; // Treat all JS code as new version//mantane secore code.

// alert(3 + 3) // we are using nodejs, not used browser

console.log(3 + 3); // code readability should be high
console.log("Ajit");

let name = "ajit";
let age = 18;
let isLoggedIn = false;
let state;

// What is data Types ? :- Classification that specifies which type of value.

/****(1) Primitive Data type :- Used stack Memory , Call by value hote hai, 
used in Deep copy ****/

// number => 2 to power 53
// bigint => 1234567891021
// string => "Ajit"
// boolean => true/false
// null => standalone value / Object
// undefined => undefined
// symbol => unique
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/**** (2) Non Primitive Data type :- used Heap Memory ,Return Hamesa Object hi karata hai, 
Call by Reference ,used in shallow copies ****/

// Class
// Object
// Array
// Regular Expression
// Function

// What is Arithmetic Instruction ?
// Ans:- An Instruction which is used to manipulate data using operators is known as Arithmetic Instruction.
//Ex:-3+4*5
// Not equal (!=):- Checks if two operands are not equal.
// Strict not equal (!==):- Checks if two operands are not equal or not of the same type.

//1. Arithmetic Operators :- + - * ** / % ++ --
//2. Assignment Operators :- = += -= *= /= %= **=
//3. Comparison Operators :- == === != !== > < >= <=
//4. Logical Operators :- && || !  (! -:Logical NOT Returns true if the operand is false)
//5. Ternary Operators :- ? : ;
//6. Bitwise Operators :- & | ^ ~ << >> (:-Bitwise NOT (~))

// What is Control Instruction ?
// i) Decision control Instruction
// ii) Iterative control Instruction / Loops :- A loop is used to excuite a statement block depending on a condition
// iii) Switch case control Instruction
// iv) Goto control Instruction
