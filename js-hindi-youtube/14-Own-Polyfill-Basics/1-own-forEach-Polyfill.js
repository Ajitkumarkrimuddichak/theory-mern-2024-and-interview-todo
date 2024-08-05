/* What is Polyfill in JavaScript :- A polyfill is a piece of code used to provide modern 
functionality on older browsers that do not natively support it.
*/

// (Q) 1. Can you write Polyfill for forEach() method ?
//Ans:-Only for one question hai but uasake anadar me kya-kya hai
// i)Callback function
// ii)this concept
// iii)Prototype
// iv)Logic

// Ex:-Working in forEach() method
/* const arr = [1, 2, 3, 4];
arr.forEach((item, index, self) => { //Function Defind kiya hai // But call kaha se hota hai to // Ye callback function internally jo forEach() ka implementation/prototype hai vaha se call hota hai 
  console.log(item, index, self);
}); //arr. likha to forEach kyo dikha raha hai kyo ki arr ke parent class ke andar prototype ke andar  forEach() method available hai

//(or) Array.prototype , All method show 
*/

// Ye Pura concept browser ke console pe code karo or vahi chack karo
// Ex:- Own myForEach() method
Array.prototype.myForEach = function (callback) {
  //first Array.prototype me Add karana hoga //forEach me callback function tha na// to yaha par bhi callback function liya hai
  if (!callback) {
    //check lagaya ki agar user callback function pass nahi karega to error do
    throw Error("MyForEach Error : is not a Function");
  }
  //console.log("My this Object :", this);
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr); //Same hai// forEach((item, index, self)//implement polyfill
  }
}; //hamane prototype ke andar available kara diya hai

//arr.myForEach();// not pass callback function then Error show
//arr.myForEach(() => {});//run

//hamane check kar liya hai ki myForEach available hai ki nahi prototype me
let myarr = [1, 2, 3, 4, 5, 6];
myarr.myForEach((item, index, self) => {
  console.log(item, index, self);
});
