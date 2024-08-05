// Initializing a 3D Array :-  //Example code :-

// Initialize dimensions
const depth = 3; // Number of 2D arrays
const rows = 2; // Number of rows in each 2D array
const cols = 5; // Number of columns in each row

// Create the 3D array
let array3D = new Array(depth);
for (let i = 0; i < depth; i++) {
  array3D[i] = new Array(rows);
  for (let j = 0; j < rows; j++) {
    array3D[i][j] = new Array(cols).fill(0); // Initialize all elements to 0
    //console.log(array3D[i][j]);
  }
}

// Fill the array with some values
for (let i = 0; i < depth; i++) {
  for (let j = 0; j < rows; j++) {
    for (let k = 0; k < cols; k++) {
      array3D[i][j][k] = i * 100 + j * 10 + k; // Just an example formula
    }
  }
}
//console.log(array3D);

// Access a specific element
/*
let specificValue = array3D[1][2][3];
console.log(`The value at array3D[1][2][3] is: ${specificValue}`);
*/

// Print all values
for (let i = 0; i < depth; i++) {
  for (let j = 0; j < rows; j++) {
    for (let k = 0; k < cols; k++) {
      console.log(`array3D[${i}][${j}][${k}] = ${array3D[i][j][k]}`);
    }
  }
}
