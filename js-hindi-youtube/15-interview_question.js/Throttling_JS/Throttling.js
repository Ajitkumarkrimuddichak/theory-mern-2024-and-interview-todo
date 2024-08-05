/*What is Throttling in JS :- Throttling in JS is a technique used to control the frequency 
of execution of a function. It's particularly useful when dealing with events that fire 
off continuously.

(or) Ex:- Koi user one bar hi click kare or fir clicke kare to nahi kar paye 
jab tak function us time duration ko fullfile/call kar le . tohi fir dubara function call ho.
Ex:- Registration fome 
*/

const mythrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked");
}, 5000);
