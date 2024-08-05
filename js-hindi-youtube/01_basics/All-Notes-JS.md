# const accountId = 144553; :- value overide and Re-declaration is not possible.Block level scope and const does't adds window object.
## let accountEmail = "ajit@google.com"; :- value overide is possible and Re-declaration is not possible.Block level scope and let does't adds window object.
### var accountPassword = "12345"; :- value overide and Re-declaration is possible functional level scope and var adds itself to the window object.

accountCity = "Bihar"; // variable value defined
# let accountState; :- 
JS undefined means a variable has been declared but not assigned value.

# Difference == vs ===
// == in JS is used for comparing two variables, but ignores the datatype of variable.
// === in JS is used for comparing two variables, but === operator also checks datatype and compares two value.

# What is Variable :- 
Variable are the name of memory location where we store data.

# "use strict" :- 
 Treat all JS code as new version // mantane secore code.
// alert( 3 + 3) // we are using nodejs, not used browser
console.log(3 + 3); // code readability should be high

# What is data Types :- 
Classification that specifies which type of value.

## (1)Primitive Data type :- 
Used stack Memory,Call by value hote hai, used in Deep copy.
// number => 2 to power 53
// bigint => 1234567891021
// string => "Ajit"
// boolean => true/false
// null => standalone value / Object
// undefined => undefined
// symbol => unique

console.log(typeof undefined); // undefined
console.log(typeof null); // object

## (2) Non Primitive Data type :- 
Used Heap Memory and Return Hamesa Object hi karata hai, used Call by Reference ,used in shallow copies.
// Class
// Object
// Array
// Regular Expression
// Function

# What is Arithmetic Instruction ?
Ans:- An Instruction which is used to manipulate data using operators is known as Arithmetic Instruction.
Ex:-3+4*5

//1. Arithmetic Operators :- + - * ** / % ++ --
//2. Assignment Operators :- = += -= *= /= %= **=
//3. Comparison Operators :- == === != !== > < >= <=
//4. Logical Operators :- && || ! (! -: exclamation mark)
//5. Ternary Operators :- ? : ;  
//6. Bitwise Operators :- & | ^ ~ << >>
=> {}Curly Brackets, ()Parentheses/Round Brackets, []Square Brackets/Brackets

# What is Control Instruction ?
i) Decision control Instruction
ii) Iterative control Instruction / Loops :- A loop is used to excuite a statement block depending on a condition.
iii) Switch case control Instruction
iv) Goto control Instruction

# what is interpolation/Template literals/Template String/Back-tick (``) in js :- 
That allows injecting variables and arithmetic expressions directly into a string.

# What is String :- 
A string is a sequence of one or more characters that may consist of letters, number or symbols. 
const name = "Ajit"; //string declaration in first way.
//console.log(name + repoCount + " Value"); //Old version, concate//name
s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h Linten feature typeScript ka hai usi se aata hai
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is
${repoCount}`); //new version, string interpolation bolate hai// back-tick used karane ka fayada , yaha pe aata hai string interpolation hai kya aap banate hai place holder unake andar jo bhi variable directely inject kara sakate hai.

const gameName = new String("Ajit-hc-com");//Second Way constructor method used 

  
# What is Array :-
i) Array is object, storing a collection of multiple items under a single variable name.
ii) JavaScript arrays are resizable. And mix of different data types.
iii) Array elements cannot be accessed using arbitrary strings as indexes.
iv) JavaScript array create "shallow copies" :- A shallow copy of an object is a copy whose properties share the same references.
v) Deep copy :- A deep copy of an object is a copy whose properties do not share the same references.

## Note:- Higher-order array methods in JavaScript :-
1) array.forEach(callback(currentValue, index, array))
2) array.map(callback(currentValue, index, array))
3) array.filter(callback(currentValue, index, array))
4) array.reduce(callback(accumulator, currentValue, index, array)
5) array.find(callback(currentValue, index, array))

## What is Object in JavaScript :- Object is a collection of key-value pairs where each key is a string, and each value can be of any data type, like objects, functions,arrays,and primitive data types like numbers, strings, and booleans. 
 => Objects are used to store and manipulate data in a single variable name.
### Creating an Object 
 (1) Object Literal :- singleton nahi banta hai
 (2) Object Constructor :- Constructor jo banata hai vahi khali singleton Hota hai
 (3) Using a Constructor Function
 (4) Using ES6 Classes
 Accessing Properties and Methods :-
 (1) Dot Notation :- c.l(JsUser.email)
 (2) Bracket Notation :- c.l(JsUser["email"])

#### Function ####
What is Function :- Function is block of code performs a specific task. 
Another Defination :- Function is a block of reusable code that performs a specific task. 
Note:- Difference :- 
 Function:-Function is not Inside of a Class. 
 Method:- Method is Inside of a Class.

(1) Function Declaration :- Function declaration is a way to define a function with a specified name.
 function:-Keyword. 
 sayMyName:-identifier
This function Before and after calling is possible.

(2)What is Function Expression :- When we create a function and assign to a 
Variable known as function Expression.
Note :- Before Calling is note Possible & Only for After calling Possible.

(3)What is Arrow Function :- An arrow function is a shorter syntax compared to function expression. Arrow function are always anonymous.
Note :- The Arrow function does not have a reference to 'this keyword'.
Note :- Before Calling is note Possible & Only for After calling Possible.

(4)What is Anonymous Function :- Anonymous Function allow the create of 
functions which have no specified name.
=> Store Anonymous Function in a Variable. 
Note :- Anonymous Function Ex :- (() => {})(); , let Arrow =() =>{}. 
Note :- Before Calling is note Possible & Only for After calling Possible.

(5)What is CallBack Function :- A callback function is a passed into another
function as an argument.
Note :- Before Calling & After calling Possible.

(6)What is Immediately Invoked Function Expressions(IIFE) :- Avoid creating Global variable and function. As it doesn't define variable and function globally so there will be no name conflicts. Scope is limited to that particular function.
Note:- Before Calling is note Possible & Only for After calling Possible.
Ex:-IIFE (or) Global Scope ke Pallution se Problem hoti hai isi Liye ise bachane ke liye IIFE used karate hai
(function func() { //Isako named IIFE kahate hai
 console.log(`DB CONNECTED`);
})();

((name) => { //Isako Un-named IIFE kahate hai
 console.log(`DB CONNECTED TWO ${name}`);
})("ajit");
// Interview Kahenge Two IIFE create karo joki dono likh do

# (7) What is Factory Function :- 
Factory function returns an Object. It can produce Object instance without new keyword or Class. Note :- Before Calling & After calling Possible.

# (8)What is Higher Order Function :- 
A function that returns a function or takes other functions as arguments is called a higher-order function.

# (9)What is Callbacke Hell :- 
Callback Hell is essentially nested callbacks. Every callback depends/waits for the previous callback.

# (10)What is Closure function :- 
Closure gives you access to an outer function’s scope from an inner function. Closures are created whenever a function is created within another function. 

# (11)What is Currying Function :- 
Currying is a function that takes multiple arguments is transformed into a series of functions, each taking a single argument.

<!-- falsy values
:- false, 0, -0, BigInt 0n, "", null, undefined, "NaN :- Not-a-Number"
//truthy values
:- "0", 'false', " ", [], {}, function(){}
-->
**** Query Selecter/Attribut nikalane ka tarika hai ****
document.getElementById('title') // getElementById() Mathods hai
document.getElementById('title').setAttribute('class','test') 
document.getElementsByClassName('heading')
**** mainly used real time *****
document.querySelector('h1') 
document.querySelectorAll('li')

**** Get Methods/title se kai bar value/content bhi nikalana parata hai ****
1) title.textContent
 Ex:- output DOM learning
2) title.innerHTML
 Ex:- output DOM learning
3) title.innerText
 Ex:- 'DOM learning'
4) getAttribute
Difference between textContent vs innerText :-
innerText :- ka to jo text vasible hai vahi aayega.
textContent :- ke andar sara ke sara milata hai.
innerHTML :- pura value de raha hai or usake andar html likh rakha hai usako bhi dega
<!-- Set Method:-
 innerText
 innerHTML
 setAttribute
 Attribute
-->
<!-- Traversal Methods :-
 ParentNode
 ParentElement
 children
 childNode
 firstChild
 lastChild
 nextSibling
-->
<!-- Create Methods :- 
 createElement
 createTextNode
 createComment
-->
<!-- Append Methods :- 
 appendChild
 insertBefore
-->
<!-- Replace/remove Child :- 
 replaceChild
 removeChild
-->
<!-- Form Events :- 
 onfocus
 onblur
 oninput
 onsubmit
-->
<!-- Browser Object Model (BOM) refers to the interaction and manipulation of 
the browser's components through JavaScript. 
Ex:-window.alert('Hello, world!');
console.log(window.screen.width);
-->

(1) What is Difference between Browser Events vs Environment Events ? 
i) Browser Events :- Browser events occur within the context of a web browser.These
events are related to user interactions with the web page or the browser itself.
Ex:-Mouse clicks, key presses, page load, form submissions, etc
(ii) Environment Events :- Environment events refer to events that occur within the broader computing environment, which may include the operating system, hardware,network, or other software components.These events are not limited to the web browser but can occur at the system level.
Ex:- system startup/shutdown, network connection status changes, file system events (like file creation, deletion, or modification), hardware events (like USB device insertion/removal), etc.


# Promise 
Note :- Callback Hell me jo Samasya tha XMLHttpRequest karane me aata tha 
Note :- Callback Hell Ke problem ke vajah se Promises ko laya gaya tha or Fetch API ko intruduce kiya gaya tha.
Note :- Learning Steps:- Synchronous/Asynchronous => callback hell => promise =>catch/then => async & await => async try await catch => Fetch Api => axios
Note :- Promise return "object"
Note :-Promise se hi concept banata hai .then ka or .catch ka , ye to bante hi hai or aaj kal yek internal tool bhi milata hai jise bolate hai Fetch ko samajhane se pahate Promise ko aana jaruri hai.

# Promise Defination :- 
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
Note :- Promise ka used Asynchronous operation karane ke liye kiya jata hai js me.
//(i) pending:- initial state, neither fulfilled or rejected.
//(ii) fulfilled/Resolved:- Promise Completed.
//(iii) rejected:- Promise Failed.

# Object literal :-
Object literals is a comma separated list of name-value pairs inside of curly braces.

# Kya JavaScript me classes hoti hai.
- Nahi hota tha. or technically dekha jaye to abhi bhi nahi hota hai. Not:- JS Prototype-based language hai. Na ki object oriented/or naki functional . Sab prototype-based approach chalata hai isake upar jo bhi hai oh "syntactic sugar hai :- Khali syntex de diya gaya hai taki aap miss outfield na kar paye."

# What is Javascript
- JavaScript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. 

# or 
- Js is a client side programming language can be used on server side also.
It is used to make Dynamic webpages.

## OOP 
- Object-Oriented Programming (OOP) in JavaScript is a programming paradigm that uses objects to design applications and software. It is a way of structuring code so that it is easier to manage and maintain.

# (or)
- programming paradigm :- simple sa matalab hai ki aapaka code likhane ka structure kaisa hota hai.

## Object
- collection of properties and methods
- Ex:- toLowerCase,toUpperCase,new Promise,Date...

# Why use oop
- Hame oop ki itani jarurat kaha pe pari jarurat to nahi thi bas kam chal raha tha. Lekin kya ho raha tha ki code bahut mashup ho raha tha or one concept hota hai ispigiti code kar ke. kuchh bhi code chank nahi ho raha tha isi liye oop ko laya gaya.
oop aane se ham used kar sakate hai Ex:- Services

## parts of OOP 
- Object literal  
- Constructor function :- har bar yek new instance/copy deta hai us copy me jo karana hai karo vah aap ka hi rahega
- Prototypes
- Classes
- Instances ka part hai :- (new, this)

## 4 pillars
Abstraction :- Matalb internal detail hide kar lena Ex:- fetch.

Encapsulation :- Data ko rape-up kar dena ab usame se jo chahiye jaise ki function method.

Inheritance :- Reusability of code it is known as inheritance.

Polymorphism :- Poly : many , morphism : Bahut sare rup //one hi method bahut sara kam kar deta hai Ex:- console.log()

# Difference between properties vs method :-
Properties :- Properties are values associated with an object. They represent the state or characteristics of the object.

Methods :- Methods are functions that are associated with an object. They represent actions that can be performed by the object.

## Before Learing Lexical scoping , then Closer ?
1) what is Lexical scoping in JavaScript ?
Ans:- Lexical scope is the ability for a function scope to access variables from the 
parent scope. We call the child function to be lexically bound by that of the parent 
function.

2) What is Closer in JavaScript ?
Ans:- A closure is the combination of a function bundled together with references to its surrounding state.In other words, a closure gives you access to an outer function's scope from an inner function. at function creation time.

# What is Array Reduce method in js :- 
The reduce method executes a reducer function on each element of the array,resulting in 'single output value'.
//Syntex:- array.reduce(callback(accumulator, currentValue, index, array),initialValue)

# What is Bind method in js:-
Bind creates a new function that will force the this inside the function to be the 
parameter passed to bind().

# What is Call method in js:-
It can be used to invoke (call) a method with an owner object as an argument (parameter). With call(), an object can use a method belonging to another object.
Note:- Calling the Method Directly

# What is Apply method in js :-
 The apply method is similar to call, but it takes an array of arguments instead of a list of arguments. This is useful if you want to pass arguments dynamically.

# Note:- Different
The call() method takes arguments separately.
The apply() method takes argument as an Array.

# What is Map method in js :- 
Map method is used to create a new array and. This method does not change the original array but returns a new array. 
Syntax:- array.map(function(currentValue, index, array) {})

# What is web storage in JS :-
## (i)What is Local Storage in js :- 
The localstorage is a read only Property of window Object. It Stores data in a  Web browser specifically to the domain and Protocol.It doesn't get send to the server as it is stored locally in the web browser with no expiration date. The data will not be deleted when the browser is closed and re-opened. 
// [Syntax:- Window.localStorage]
// Methods :-
// SetItem (key, Value) :- It allows to add a key/value Pair to the Storage Object.If the key already exists, the name. Value, will overwrite the old value.
// getItem(key) :- It returns the Value of the item that is set with the given key.
// key(n) :- It returns the key of the item in the Storage Obrect at the nth indesx.which can be useful for looping.
// removeItem (key) :- It removes the item in the storage Object with the given key.

## (ii)What is Session Storage in js :- 
Session Storage is a web storage API in JavaScript that allows you to store key-value 
pairs in the browser. Unlike cookies, the data is stored only for the duration of the page 
session. This means that data is available as long as the browser tab is open. Once the 
tab is closed, the data is lost. 
// [Syntax: window. SessionStorage]
// Methods :-
// SetItem (key, value) :- It allows to add a key/value. pair to the Storage obrect.If the key already exists, the name value will overwrite the old value.
// getItem(key) :- It returns the value of the item that is set with the given key.
// key (n) :- It returns the key of the item in the Storage Object at the nth index which con be useful for looping.
// removeItem (key) :- It removes the item in the storage Obaect with the given key.

# What is Debouncing in js :- 
Debouncing is a programming technique used to ensure that a function is not called too frequently. It limits the rate at which a function can fire.
- Real Ex:- Flipkart Search bar // Laptop search kar rahe hai to har Letter one by one type kar rahe hai to har Letter pe function call na ho pura Letter type karane ke kuchh milly second bad call ho function this is Debouncing.

# What is Throttling in JS :- 
Throttling in JS is a technique used to control the frequency of execution of a function. It's particularly useful when dealing with events that fire 
off continuously.
-  Ex:- Koi user one bar hi click kare or fir clicke kare to nahi kar paye 
jab tak function us time duration ko fullfile/call kar le . tohi fir dubara function call ho. Ex:- Registration fome 

## What is a Cookie?
 Ans:-A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
## Why do you need a Cookie?
 Ans:-Cookies are used to remember information about the user profile(such as username). It basically involves two steps,
 i)When a user visits a web page, the user profile can be stored in a cookie.
ii)Next time the user visits the page, the cookie remembers the user profile.

# SetTimeout :-
Note :- In JavaScript, setTimeout and setInterval are functions used to schedule tasks to be executed after a certain delay or repeatedly at specified intervals,respectively. They are part of the Web API provided by browsers, enabling asynchronous operations. 

## What is setTimeout in JS :- 
setTimeout is used to execute a function once after a specified delay (in milliseconds).

## What is setInterval in js :-
 setInterval is used to repeatedly execute a function at specified intervals (in milliseconds). 

# What is Synchronous in js :- 
Synchronous programming, tasks are executed sequentially.Each operation must complete before the next one begins. This can lead to blocking behavior, where a long-running task prevents the execution of subsequent tasks.

# What is Asynchronous in JS :- 
Asynchronous programming allows tasks to be executed without blocking the main thread. This is crucial for tasks like network requests,reading files, or timers, where waiting for the task to complete synchronously would be inefficient.

# What Is Array Destructuring :-
Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

# What is Closure :-
A closure gives you access to an outer function's scope from an inner function.

# What is Hoisting in js :- 
A javascript mechanism where variables with 'var' and 'function' declarations are moved to the top of their scope before code execution.
=> function declarations are properly hoisted (not arrow function).
=> var is hoisted.

# what is scope in JavaScript :- 
In JavaScript, scope refers to the context in which variables, functions, and objects are accessible.
Types of scope in JavaScript :-
1) Global Scope :-
=> Variables declared outside any function or block are in the global scope.
=> These variables can be accessed from anywhere in the code.
2) Function Scope :-
=> Variables declared inside a function are in the function scope.
=> These variables are accessible only within that function.
3) Block Scope :-
=> Introduced in ECMAScript 6 (ES6) with the let and const keywords.
=> Variables declared inside a block (e.g., within {} braces) are in the block scope.
=> These variables are accessible only within that block.
4) Lexical Scope :-
=> Also known as static scope.
=> In JavaScript, a function's scope is determined by its location within the source code,
and nested functions have access to variables declared in their outer scopes.

# What is Scope Chain in JavaScript :- 
JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
=> Scope Chain means that one variable has a scope is used by another variable or function 
having another scope (may be global or local/function or block scope).

# What is Memoization :- 
Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.

Another defination :- Hamare pass koi code likha hai jo ki first time chala or result mil gaya or fir same request aaya usi code ke liye 
ber ber chala rahe ho usi code ko or same/jada time lag raha hai run karane me ,first time chale usaka time "cache" me save kar lu or fir next time request usi code ke liye aaye to actual code na chale or utana time na
lage oh memory se utha ke us response ko user ko de-de this is memoization.
React.js me ham isi ko hook se karate hai joki "usedMemo()" se "cache" karate hai. 

# What is Object Destructuring :- 
Object destructuring  allow to unpack and assign object properties into individual variables.

# What is Object Literals :- 
Object literals is a comma separated list of name-value pairs inside of curly braces.

# What is Rest parameters :- 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

# Difference:-
Spread Operator:- Used in array or object literals, and function calls.
Rest Parameters:- Used in function parameter lists and destructuring assignments.

# What is Spread Operator :- 
Spread operator denoted by three dots (...), allows an iterable (array or string) to expand where zero or more arguments are required.

# What is this keyword in js :- 
Depends on how to used "this keyword".
// Ex:-(1) Global Context:- When used outside any function, this refers to the global object
//console.log(this); // Window in browsers

# What is Polyfill in JavaScript :- 
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// (Q) 1. Can you write Polyfill for forEach() method ?
//Ans:-Only for one question hai but uasake anadar me kya-kya hai
// i)Callback function
// ii)this concept
// iii)Prototype
// iv)Logic

# What is from() method in js :- 
Array.from() method convert Array & return array.

# Whai is Event Propagation in js :-
Event propagation in JavaScript refers to the mechanism by which events are handled and propagated through the DOM tree. There are two main phases, capturing phase and bubbling phase. 
i) Event Babling :- Working Bottom to Top.
ii) Event Capturing :- Working Top to Bottom. 
iii) Target Phase :- No used.

# What is Execution Context Js :- 
Each Operation waits for the last one to complete before executing.

## What is JSON :- 
JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

## Syntax rules of JSON :- 
Below are the list of syntax rules of JSON.
i)The data is in name/value pairs
ii)The data is separated by commas 
iii)Curly braces hold objects 
iv)Square brackets hold arrays
## What is the purpose JSON stringify?
 Ans:-When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.
Ex:- var userJSON = { name: ”John”, age: 31 }; 
var userString = JSON.stringify(userJSON); 
console.log(userString); //”{”name”:”John”,”age”:31}”

## How do you parse JSON string :-
When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.
Ex:-var userString = ’{”name”:”John”,”age”:31}’; var userJSON = JSON.parse(userString); console.log(userJSON); // {name: ”John”, age:22}

## What is an event loop :- 
The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

## What is call stack :- 
Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program.It has two major actions,
i)Whenever you call a function for its execution, you are pushing it to the stack.
ii)Whenever the execution is completed, the function is popped out of the stack.

## What is MERN stack?
Ans:- MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
i)MongoDB — document database
ii)Express(.js) — Node.js web framework
iii)React(.js) — a client-side JavaScript Library 
iv)Node(.js) — the premier JavaScript web server

## How does the MERN stack work? 
Ans:-The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON

## Is MERN a full-stack solution?
Ans:-Yes, MERN is a full stack, following the traditional three-tier architectural pattern, including. 
- front-end tier (React.js),
- application tier (Express.js and Node.js), 
- database tier (MongoDB).

<!-- What is console.log() / Debugging tool ?
  Ans :- console JS ka Part / technically hai bhi or Nahi bhi hai bahut sara part jo JS ka part hi nahi hota hai Ex:- document.
  Actually console hai kya yek Debugging tool Debugger hai Browser ka Developer Tool hai JS ka run time Inject jarata hai
-->


