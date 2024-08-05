/* Note :- What is Memoization :- Memoization is an optimization technique that can be used
to reduce time-consuming calculations by saving previous input to something called cache 
and returning the result from it.

Another defination :- Hamare pass koi code likha hai jo ki first time chala or result mil 
gaya or fir same request aaya usi code ke liye to ber-ber chala rahe ho usi code ko or 
same/jada time lag raha hai run karane me , first time chala usaka time "cache" me save 
kar lu or fir next time request usi code ke liye aaye to actual code na chale or utana time
na lage oh memory se utha ke us response ko user ko de-de this is memoization.

React.js me ham isi ko hook se karate hai joki "usedMemo()" se "cache" karate hai. 
*/

//JS cache achive program
const calc = (n) => {
  //console.log(n);
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
const memoize = (fun) => {
  //Ye function callback recive karega kon sa function  "calc()" hai
  let cache = {}; //store kar rahe object me Ex:-{'5':15}
  return function (...args) {
    //this concept closures ka hai
    let n = args[0];
    if (n in cache) {
      //likh sakate hai // jo bhi cache me hai use n me laya hai
      console.log("cache");
      return cache[n];
    } else {
      console.log("calculating first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time("First call");
const efficient = memoize(calc);
console.log(efficient(5)); // Output: 15  but  time is different
console.timeEnd("First call");

console.time("Second call");
console.log(efficient(5)); // Output: 15 but Time Different
console.timeEnd("Second call");
