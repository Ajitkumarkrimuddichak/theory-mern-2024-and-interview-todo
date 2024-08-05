/**** What is Closure :- A closure gives you access to an outer function's scope 
from an inner function.

(or) A closure is the combination of a function bundled together (enclosed) with references
to its surrounding state (the lexical environment). In other words, a closure gives you 
access to an outer function's scope from an inner function. In JavaScript, closures are 
created every time a function is created, at function creation time.

****/

// Ex:-
const outerFunction = (a) => {
  const b = 10;
  const InnerFunction = () => {
    let sum = a + b;
    console.log(`The sum of two no is ${sum}`);
  };
  return InnerFunction;
};
const myFunc = outerFunction(50);
myFunc();
