/**** What is Rest parameters :- The rest parameter syntax allows a function to accept
an indefinite number of arguments as an array.

Difference:-
Spread Operator:- Used in array , string or object literals, and function calls.
Rest Parameters:- Used in function parameter lists and destructuring assignments.
****/

//Ex:-
function sum(...theArgs) {
  let total = 0;
  for (let res of theArgs) {
    total += res;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// function sum(...numbers) {
//   return numbers.reduce((total, current) => total + current, 0);
// }
// console.log(sum(1, 2, 3));
// console.log(sum(10, 20, 30, 40));
// console.log(sum(5));
