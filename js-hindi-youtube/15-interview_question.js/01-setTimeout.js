/** Note :- In JavaScript, setTimeout and setInterval are functions used to schedule tasks
to be executed after a certain delay or repeatedly at specified intervals, respectively. 
They are part of the Web API provided by browsers, enabling asynchronous operations. 
**/

/** What is setTimeout in JS :- setTimeout is used to execute a function once after a 
specified delay (in milliseconds).
**/

//Ex :-
//(1)
// function greet() {
//   console.log("Hello, World!");
// }
// setTimeout(greet, 2000);

//(2)
// setTimeout(() => {
//   console.log("Hello, World!");
// }, 2000);

//(3) setTimeout and setInterval
let intervalId = setInterval(() => {
  console.log("This will be printed repeatedly");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after 5 seconds
  console.log("Interval cleared");
}, 5000);
