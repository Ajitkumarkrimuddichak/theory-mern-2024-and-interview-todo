/**** What is Asynchronous in JS :- Asynchronous programming allows tasks to be executed 
without blocking the main thread. This is crucial for tasks like network requests, 
reading files, or timers, where waiting for the task to complete synchronously would
be inefficient.
****/

//Ex:-
//(i)
/*const getData = async () => { 
  let data = "First Hello World";
  return data;
};
getData().then((data) => console.log(data));
console.log("End");*/

//(ii) Await EX:-
/*const getData = async () => {
  let y = await "Hello World";
  console.log(y);
};
console.log(1);
getData();
console.log(2);*/

/*const fun2 = () => {
  setTimeout(() => {
    console.log("Fun2 is Third");
  }, 2000);
};
const fun1 = () => {
  console.log("fun1 is First");
  fun2();
  console.log("fin1 is second");
};
fun1();*/

/*
console.log("Start");
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Task Complete");
    }, 2000);
  });
}
async function executeTask() {
  const message = await asyncTask();
  console.log(message);
  console.log("End");
}
executeTask();
*/
