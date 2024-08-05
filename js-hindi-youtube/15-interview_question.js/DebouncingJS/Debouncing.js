/* What is Debouncing in js :- Debouncing is a programming technique used to ensure that a 
function is not called too frequently. It limits the rate at which a function can fire.*/

/* Real Ex:- Flipkart Search bar // Laptop search kar rahe hai to har Letter one by one type kar
rahe hai to har Letter pe function call na ho pura Letter type karane ke kuchh milly second
bad call ho function this is Debouncing.*/

let counter = 0;
function getData() {
  console.log("fetching Data " + counter++);
}

function myDebouncing(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const BetterFun = myDebouncing(getData, 1000);
