/*What is Modules :- In JavaScript, modules are a way to organize and 
structure your code into smaller, reusable pieces, each with their own 
scope and dependencies. This helps in keeping code clean, modular, 
and easier to manage, especially in larger applications.
*/
//Ex:-
// 1)
// module.js
// export function greet(name) {
//   return `Hello, ${name}!`;
// }
// // app.js
// import { greet } from "./module.js";
// console.log(greet("Alice")); // Outputs: Hello, Alice!

// 2)
// module.js
function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = { greet };
// app.js
const { greet } = require("./module.js");
console.log(greet("Bob")); // Outputs: Hello, Bob!
