/* What is CallBack Function :- A callback function is a passed into another
function as an argument.

Note :- Before Calling & After calling Possible.
*/
// Ex:- (1)
//function First(Parameter) {
//   console.log("I am First ", Parameter);
// }
// function Second(callback) {
//   let b = 10;
//   callback(b);
// }
// Second(First); //Argument pass

// Ex:- (2)
// function MainFunction(callback) {
//   let result = 10;
//   callback(result);
// }
// function callback1(data) {
//   console.log("Callback 1 result:", data * 2);
// }
// function callback2(data) {
//   console.log("Callback 2 result:", data + 5);
// }
// MainFunction(callback1);
// MainFunction(callback2);

//(3) Callback function , Synchronous/Asynchronous Dono hote hai.
//Synchronous :-Ex:👎
/*console.log("start");
const roll = [1, 2, 3, 4];
roll.forEach((r) => {
  // Callback used
  console.log(r);
});
console.log("End");*/

// Asynchronous :- Ex 👎
/*console.log("Start");
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello, Ajit";
    callback(data);
  }, 2000);
}
function handleData(data) {
  console.log(data);
}
fetchData(handleData);
console.log("End");*/

//(4) Code Error /isi ko solved karane ke liye callback aaya
/*console.log("start");
function getName(name) {
  setTimeout(() => {
    console.log("Inside SetTimeout");
    return name;
  }, 2000);
}
const Re = getName("Ajit");
console.log(Re); //undefined print // isi ko solved karane ke liye callback aaya
console.log("End");*/

//(or) Error solved using callback function
console.log("start");
function getName(name, callback) {
  setTimeout(() => {
    console.log("Inside SetTimeout");
    callback(name);
  }, 2000);
}
const nm = getName("Ajit", (nm) => {
  //callback function
  console.log(nm);
});
console.log("End");
