/**** What is Synchronous in js :- Synchronous programming, tasks are executed sequentially.
Each operation must complete before the next one begins. This can lead to blocking behavior, 
where a long-running task prevents the execution of subsequent tasks.
****/

//Ex:-
/*
console.log("First Run"); 
console.log("Second Run");
console.log("Third Run");
*/

const fun2 = () => {
  console.log("Fun2 is second");
};
const fun1 = () => {
  console.log("fun1 is First");
  fun2();
  console.log("fin is Third");
};
fun1();
