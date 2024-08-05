/**** What is Array :-
 i) Array is object, storing a collection of multiple items under a single variable name.
 ii) JavaScript arrays are resizable. And mix of different data types.
 iii) Array elements cannot be accessed using arbitrary strings as indexes.
 iv) JavaScript array create "shallow copies" :- A shallow copy of an object is a copy whose properties share the same references.
 v) Deep copy :- A deep copy of an object is a copy whose properties do not share the same references.
  
****/

//Array Declaration first way.
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
// console.log(typeof myArr);

//Array Declaration Second Way.
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);
// console.log(typeof myArr2);

//****  Array methods ****/

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); //Array ke End value removed
// console.log(myArr);

// myArr.unshift(9)//Array ke First index me Add kar dega
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3); //Diff. :- No Range Include. And no change Oriznal Array
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3); //Diff. :- Range Include. And change Oriznal Array
// console.log("C ", myArr);
// console.log(myn2);

//****   Try to use arbitrary strings add to index *****/
/* let myArray = [1, 2, 3];
console.log(myArray[0]); // Access elements using numerical indexes (this is working)
myArray["Ajit"] = "kumar"; // Try to use arbitrary strings as indexes
console.log(myArray); // Accessing using string indexes (this does not behave like array indexing)
console.log(myArray["Ajit"]); // The length property does not include the properties with string keys
console.log("My Array Length ", myArray.length);
*/

//JavaScript create Shallow copies
//Ex:-
/*var obj1 = { id: 1, company: "Karma" };
const obj2 = obj1;
obj2.id = 2;
console.log(obj1.id);
console.log(obj2.id);*/

//JavaScript create Deep copy
//Ex:-
/*const originalObject = {
  name: "Ajit",
  age: 30,
  address: {
    city: "Bengaluru",
    country: "India",
  },
};
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
originalObject.name = "Ram";
originalObject.address.city = "Patna";
console.log(deepCopyObject);
console.log(originalObject);*/
