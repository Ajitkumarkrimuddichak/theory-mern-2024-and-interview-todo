/* Note :- What is Function :- Function is block of code performs a specific task. 
Anther Defination :- Function is a block of reusable code that performs a specific task. 
*/

/*(1) Function Declaration :- Function declaration is a way to define a function with a specified name.
  function:-Keyword. 
  sayMyName:-identifier
  This function Before and after calling is possible.

Note:- Difference :- 
Function:-Function is not Inside of a Class. 
Method:- Method is Inside of a Class.
*/

function sayMyName() {
  // Function Defination
  console.log("A");
  console.log("J");
  console.log("I");
  console.log("T");
  console.log("K");
  console.log("U");
}
//sayMyName; //<=Function Reference
// sayMyName() <=Function Excute , function call

function addTwoNumbers(Parameter1, Parameter2) {
  // let result = Parameter1 + Parameter2
  // return result
  return Parameter1 + Parameter2; // Function ka one rule hai ki jab bhi function se return kara denge to usake bad jo bhi code rahe not working.
  //console.log("ajit"); // Unreachable code
}
const result = addTwoNumbers(3, 5); //Arguments Pass
//console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    //if(username === undefined)
    console.log("Please Enter a UserName");
    return;
  }
  return `${username} Just Logged In`;
}
//console.log(loginUserMessage("Ajit"));
//console.log(loginUserMessage());

function defoultparameter(username = "kumar") {
  return `${username} Just Logged in`;
}
//console.log(defoultparameter());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//console.log(calculateCartPrice(200, 400, 500, 2000)); //val1 :-200 and val2 :-400

//How to Object Add in a Function and Used
const user = {
  username: "Ajit",
  price: 199,
};
function handleObject(anyobject) {
  // console.log(
  //   `User Name is ${anyobject.username} and price is ${anyobject.price}`
  // );
}
//handleObject(user);
//(or) Direct Object Pass in Function
/* handleObject({
  username: "sam",
  prices: 399,
});*/

//How to Array Add in a Function and Used
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));

/****  Function Reference ****/
//Using Function References in Arrays and Objects
/*let functionsArray = [
  function () {
    console.log("First function");
  },
  function () {
    console.log("Second function");
  },
];
functionsArray[0]();
functionsArray[1]();

let functionsObject = {
  greet: function () {
    console.log("Hello from object one");
  },
  farewell: function () {
    console.log("Goodbye from object two");
  },
};
functionsObject.greet();
functionsObject.farewell();*/

/*
// Using Function References with Event Listeners
function handleClick() {
  console.log("Button clicked!");
}
let button = document.getElementById('myButton');
button.addEventListener('click', handleClick);
*/

// Using Function References in Promises
// Function to fetch data from a URL
/*function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      // console.log(success);
      if (success) {
        resolve({ data: "Sample data from " + url });
      } else {
        reject("Error: Unable to fetch data from " + url);
      }
    }, 1000);
  });
}
// Function to process the fetched data
function processData(response) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulating data processing
      const processedData = response.data.toUpperCase();
      resolve(processedData);
    }, 500);
  });
}
// Function to handle errors
function handleError(error) {
  console.error(error);
}
// URL to fetch data from
const url = "https://example.com/api/data";
// Using function references with promises
fetchData(url)
  .then(processData)
  .then((processedData) => {
    console.log("Processed Data:", processedData);
  })
  .catch(handleError);
*/
// Name
// Parentheses :- () , Curly Brackets :- {} , Square Brackets :- []
