/** What is Map method in js :- Map method is used to create a new array and. 
This method does not change the original array but returns a new array. 

Syntax:- array.map(function(currentValue, index, array) {})
**/

//Ex:-
/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);
*/

// Example 2: Using Arrow Function
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled);

// Example 3: Mapping to Objects
/*const users = [
  { firstName: "Ajit", lastName: "PATEL" },
  { firstName: "RAM", lastName: "Singh" },
];
const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullNames);
*/

//Example 4: Accessing Index and Array
/*const numbers = [10, 20, 30, 40, 50];
const mapped = numbers.map((number, index, array) => {
  return `Index: ${index}, Value: ${number}, Array: ${array}`;
});
console.log(mapped);
*/

//Example 5: Handling Complex Data Structures
/*const data = [
  { id: 1, details: { age: 25, city: "New Delahi" } },
  { id: 2, details: { age: 30, city: "BengAluru" } },
];
const simplified = data.map((item) => ({
  id: item.id,
  age: item.details.age,
}));
console.log(simplified);
*/

//Example 6: Chaining with Other Array Methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(result);
