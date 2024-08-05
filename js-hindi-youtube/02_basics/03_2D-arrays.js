// My Own Coding Implementation
// Create an empty 2D array :-
/*let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array);*/

// Initializing a 2D Array :-
/*let rows = 3;
let cols = 4;
let array = new Array(rows);
// Fill the array
for (let i = 0; i < rows; i++) {
  array[i] = new Array(cols).fill(0); // Fills each row with zeros
}
console.log(array);*/

//(or)
/*let rows = 3;
let cols = 4;
let array = [];
for (let i = 0; i < rows; i++) {
  array[i] = []; // Initialize the row
  for (let j = 0; j < cols; j++) {
    array[i][j] = 0;
  }
}
console.log(array);*/

// Accessing Elements in a 2D Array :-
/*let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Access element at row 1, column 2
let element = array[1][2];
console.log(element);*/

// Modifying Elements in a 2D Array :-
/*let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Change element at row 2, column 0
array[2][0] = 10;
console.log(array[2][0]);
console.log(array);*/

// Iterating Over a 2D Array :-
/*let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}*/

//Example: 2D Array Operations :-
/*let firstArr = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
let secondArr = [
  [4, 4, 4],
  [5, 5, 5],
  [6, 6, 6],
];
let AddArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(firstArr[i][j]);
  }
}
console.log("Second Arr");
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(secondArr[i][j]);
  }
}
console.log("Final Result");
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    AddArr[i][j] = firstArr[i][j] + secondArr[i][j];
    console.log(AddArr[i][j]);
  }
}*/
