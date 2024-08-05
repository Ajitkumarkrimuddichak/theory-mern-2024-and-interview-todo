/** What is Array Reduce method in js :- The reduce method executes a reducer function 
(that you provide) on each element of the array, resulting in 'single output value'.
**/
// Syntex:- array.reduce(callback(accumulator, currentValue, index, array), initialValue)

//Ex:-
//(1) Sum of All Elements in an Array
/*const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);*/

//(or) Flattening an Array of Arrays
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
console.log(flattenedArray);

//(or) Counting Instances of Values in an Object
// const names = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];
// const nameCount = names.reduce((accumulator, currentValue) => {
//   if (currentValue in accumulator) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {});
// console.log(nameCount);

//(or) Grouping Objects by a Property
/*const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
  { name: "Charlie", age: 21 },
];
const groupedByName = people.reduce((accumulator, currentValue) => {
  const key = currentValue.name;
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(currentValue);
  return accumulator;
}, {});
console.log(groupedByName);*/

//(or) input Array [10, 15, 20, 25, 30] and output array [ 10, 25, 45, 70, 100 ]
/*function cumulativeSum(arr) {
  let result = [];
  if (arr <= 0) {
    console.log("Empty Array Plz Enter Value");
  }
  arr.reduce((accumulator, currentValue, index) => {
    //console.log(` ${accumulator} <=> ${currentValue} = ${index}`);
    let sum = accumulator + currentValue;
    result.push(sum);
    return sum;
  }, 0);
  return result;
}
let inputArray = [10, 15, 20, 25, 30];
let outputArray = cumulativeSum(inputArray);
console.log(outputArray);*/
