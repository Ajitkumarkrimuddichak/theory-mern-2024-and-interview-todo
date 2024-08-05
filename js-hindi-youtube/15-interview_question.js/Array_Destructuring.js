/** Note:- What Is Array Destructuring :- Array destructuring is a unique technique that 
allows you to neatly extract an array’s value into new variables. 

(or) The destructuring assignment syntax is a JavaScript expression that makes it 
possible to unpack values from arrays, or properties from objects, into distinct variables.
**/
// Ex:-
//(1) Basic Syntax :-
/*const [a, b, c] = [1, 2, 3];
console.log(a); 
console.log(b); 
console.log(c); */

//(2) Ignoring Values :-
/*const [a, , c] = [1, 2, 3];
console.log(a); 
console.log(c); */

//(3) Default Values 👎
/*const [a, b, c = 5] = [1, 2];
console.log(a); 
console.log(b); 
console.log(c); */

//(4) Swapping Variables 👎
/*let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); 
console.log(b); */

//(5) Rest Parameter 👎
/*const [a, ...rest] = [1, 2, 3, 4];
console.log(a);    
console.log(rest); */

//(6) Nested Destructuring 👎
/*const [a, [b, c]] = [1, [2, 3]];
console.log(a); 
console.log(b); 
console.log(c); */

//(7) Destructuring with Functions 👎
/*function getCoordinates() {
  return [1, 2];
}
const [x, y] = getCoordinates();
console.log(x); 
console.log(y); */

//(8) Example Usage 👎
/*const student = ["Ajit", "kumar", [90, 85]];
const [firstName, lastName, [math, science]] = student;
console.log(firstName); 
console.log(lastName); 
console.log(math); 
console.log(science); */
