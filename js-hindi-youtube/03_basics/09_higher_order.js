/* What is Higher Order Function :- A function that returns a function or takes other 
  functions as arguments is called a higher-order function.
(or)Hindi:- O function jo ki function ko as a parameter accept kar sakata hai ya return kar sakata hai.       

Note:- Before  Calling is note Possible &  Only for After calling Possible.

Note:- JS arrays have several higher-order functions, such as map, filter, and reduce.

*/

// Ex :-
// function add(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }
// add(4, 8, function (reciveVal) {
//   console.log(reciveVal);
// });

//(or)
const higherOrder = (name) => {
  if (name === "Ajit") {
    return function (topic) {
      console.log(`Hi ${name}. What is ${topic} ? Plz Explaine .`);
    };
  }
  if (name === "Ram") {
    return function (topic) {
      console.log(`Hi ${name}. What is ${topic} ? Plz Explaine .`);
    };
  } else {
    return function () {
      console.log("Welcome to Interview.");
    };
  }
};
higherOrder("Ajit")("MERN");
higherOrder("Ram")("Backend Developer");

//Calling Another way
// const Student1 = higherOrder("Ajit");
// Student1("MERN");
// Student1("Frontend Developer");
