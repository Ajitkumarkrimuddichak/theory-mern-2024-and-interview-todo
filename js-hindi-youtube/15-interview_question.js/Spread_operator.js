/**** What is Spread Operator :- Spread operator denoted by three dots (...), allows an 
 iterable (array or string) to expand where zero or more arguments are required.
****/

// Ex:-
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, 7, 8, ...arr2];
// console.log(combined);

//(or)
// const numbers = [1, 2, 3];
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(...numbers));

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const overwritten = { ...obj1, ...obj2 };
// console.log(overwritten);

const str = "ptnsji";
const newStr = [...str];
console.log(newStr);
