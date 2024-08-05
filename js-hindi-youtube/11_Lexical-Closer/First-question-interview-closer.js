/*
#### Before Learing Lexical scoping then Closer ####
1) what is Lexical scoping in JavaScript :- Lexical scoping to resolve the variable names 
when a function is created inside another function. It determines the function's parent 
scope by looking at where the function was created instead of where it was invoked.

(or) :- Lexical scope is the ability for a function scope to access variables from the 
parent scope. We call the child function to be lexically bound by that of the parent 
function.

2) What is Closer in JavaScript ? 
Ans:- A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other words, a closure 
gives you access to an outer function's scope from an inner function. In JavaScript, 
closures are created every time a function is created, at function creation time.
*/

//Ex:- (1) Lexical scoping
/*function outer() {
  //Father
  let username = "Ajit"; //this variable only for access inner function
  //console.log("outer ", cecret); //not accessible // Resion Bare chhote se nahi maga sakate hai

  function inner() {
    //Bhai-Bhai me Not Share But Father se Khuchh Bhi mag sakate hai
    let cecret = "kumar";
    console.log("inner scope ", username);
  }

  function innerTwo() {
    //Bhai-Bhai me Not Share But Father se Khuchh Bhi mag sakate hai
    console.log("inner Two " + username);
    //console.log("cecret " + cecret); //not accebale
  }
  innerTwo(); //Call kiya to // Yaha pe execute ho kar khatam ho jata hai  // function ka schope kab tak rahata hai jab tak vah execute hota hai execute hone pe khatam hojata hai
  inner(); //Call kiya to // Yaha pe execute ho kar khatam ho jata hai
}
outer();
//console.log("outer scope" + username); //outer schope not accessable
*/

// Ex:- (2) Closer
function makeFunc() {
  const name = "Ajit";
  function displayName() {
    console.log(name); //Lexical scoping ke karan access hota hai name.
  }
  return displayName; //Yaha pe function ka Reference pass kar diya as a return
}
const myFunc = makeFunc();
/* aap ne jo banaya hai "myFunc" ye myFunc kya karata hai actually me jaise hi isako 
"makeFunc" execute  kiya or return kar diya "displayName" to khali displayName nahi jayega 
agar usaka outer function rahata/exite to usaka pura Lexical scope jayega//Lexical scoping 
ke vajah se hota hai  **/
/* Yaha pe execute kar diya to pura function khatam hogaya hai // jab pura function ka 
Sechope hi khatam/gayab ho gaya hai to ab kaise chalegi Lexical scoping.//To Yaha pe one 
concept aata hai JS ka joki hai Closure Altho usaka scope Vaha se aapane 
"Execution context/Functional Execution context"  hata diya hai // lekin Memory ka roll aa 
jata hai // JS ke pass dohi to chichh hai one memory store karana or dusara single thread 
pe execute karana //Yaha pe memory ka reference ka roll aajata hai yaha pe  */
myFunc(); //isi liye Name ko print kar pa rahe hai

// Real Life example html me hai

//(or)
/*const outerFunction = (a) => {
  const b = 10;
  const InnerFunction = () => {
    let sum = a + b;
    console.log(`The sum of two no is ${sum}`);
  };
  return InnerFunction;
};
const myFunc = outerFunction(50);
myFunc();*/
