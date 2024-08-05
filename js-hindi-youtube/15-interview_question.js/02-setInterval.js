/** What is setInterval in js :- setInterval is used to repeatedly execute a function at 
specified intervals (in milliseconds). 
**/

//Ex:-
//(1)
// function greet() {
//   console.log("Hello, World!");
// }
// setInterval(greet, 2000);

//(2)
/*setInterval(() => {
  console.log("Hello, World!");
}, 2000);*/

//(3) setTimeout and setInterval
/*let intervalId = setInterval(() => {
  console.log("This will be printed repeatedly");
}, 2000);
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after 5 seconds
  console.log("Interval cleared");
}, 5000);*/
