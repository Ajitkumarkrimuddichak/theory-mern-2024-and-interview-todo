/* What is Immediately Invoked Function Expressions(IIFE) :- Avoid creating Global variable 
and function. As it doesn't define variable and function globally so there will be no name 
conflicts. Scope is limited to that particular function.

Note:- Before Calling is note Possible &  Only for After calling Possible.
*/
//(1)
// (function (a, b) {
//   let c = a + b;
//   console.log(`Total Sum of = ${c}`);
// })(4, 2);

//(2) Immediately  Execute hojaye this is IIFE (or) Global Scope ke Pallution se Problem hoti hai  isi Liye ise bachane ke liye IIFE used karate hai
(function NameIIFE() {
  //Isako named IIFE kahate hai
  console.log(`DB CONNECTED ONE`);
})();

((name) => {
  //Isako Un-named IIFE kahate hai
  console.log(`DB CONNECTED TWO ${name}`);
})("ajit");
// Interview Kahenge Two IIFE create karo joki dono likh do
