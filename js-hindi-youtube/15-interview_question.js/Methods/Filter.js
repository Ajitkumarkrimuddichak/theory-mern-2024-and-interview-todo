/* What is Filter in js ? :- filter() method creates a new array filled with elements that 
pass a test provided by a function.
=> The filter() method does not execute the function for empty elements.
=> The filter() method does not change the original array.
*/

//Syntax:- let newArray = array.filter(callback(element[, index[, array]])[, thisArg]);

//Ex:-
/*const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); */

//(or)
const students = [
  { name: "Ram", score: 85 },
  { name: "karmaa", score: 58 },
  { name: "mukul", score: 95 },
  { name: "Dev", score: 72 },
];
const passedStudents = students.filter((student) => student.score > 72);
console.log(passedStudents);
