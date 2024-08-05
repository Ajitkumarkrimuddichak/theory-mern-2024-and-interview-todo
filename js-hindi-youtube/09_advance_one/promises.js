/*Note :- Callback Hell me jo Samasya tha XMLHttpRequest karane me aata tha */
/* Note :- Callback Hell Ke problem ke vajah se Promises ko laya gaya tha or Fetch API ko intruduce kiya gaya tha.
Note :- Learning Steps:- Synchronous/Asynchronous => callback hell => promise => catch/then => async & await => async try await catch => Fetch Api => axios
Note :- Promise return "object"
*/
/* Note :-Promise se hi concept banata hai .then ka or .catch ka , ye to bante hi hai or 
aaj kal yek internal tool bhi milata hai jise bolate hai Fetch ko samajhane se pahate 
Promise ko aana jaruri hai.
*/
/* Promise Defination :- Promise is an object that represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value. It is a more robust 
way to handle asynchronous operations compared to callbacks.

Note :- Promise ka used Asynchronous operation karane ke liye kiya jata hai javascript me.
*/
// A Promise states :-
//(i) pending:- initial state, neither fulfilled or rejected.
//(ii) fulfilled/Resolved:- Promise Completed.
//(iii) rejected:- Promise Failed.

// Jada tar Promise ko consume hi karate hai Ex:- fetch('https://somthing.com').then().catch().finally()
//(1) Ise Promise banana/create kahate hai kai tarah se banaya jata hai

/*
const promiseOne = new Promise(function (resolve, reject) {
  //Promise aapane andar one callback leta hai//aage chal ke Promise yek tarah se callback Hell /callback ke andar callback... ko Reduce karata hai
  //Do any async task likhana hai Ex:-DB calls, cryptography, network
  setTimeout(function () {
    //Async task hai // First run hoga fir then vala run hoga
    console.log("Async task is compelete");
    resolve(); //Is method ke pass bahut sara parameters or kuchh chijho ko set bhi karate hai behind the seen.
  }, 1000);
});
promiseOne.then(function () {
  //yaha pe Promise ko consume kiya hai
  //.then ka direct connection resolve ke sath || .then ke sath one callback milata hai yah function automaticly one argument accept karata hai or return karata hai
  console.log("Promise consumed"); //hamane Async task to kara diya but ye to print hi nahi hu then or resolve ko connect hi nahi kiya hai aapas me agar connect karana chahate hai to one method used karana hoga ki resolve() ko call karana hoga
});
*/

//(2) Same hai but likhane ka tarika different.
/*new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // Promise ko variable me store nahi kiya to is tarah access karate hai
  console.log("Async 2 resolved");
});*/

//(3)
/*const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //is function ne kahi se bahut sara data laya
    resolve({ username: "Chai", email: "chai@example.com" }); //yaha se value '.then' ko pass karana hai to resolve() ke andar parameter me data bhi pass kar sakate ho Object/Array pass kar sakate hai
  }, 1000);
});
promiseThree.then(function (user) {
  //yaha pe data lena/Data consumption hai
  console.log(user); //resolve ke andar jobhi parameter pass karoge vah. yaha pe mil jata hai
});*/

//(4) or (3) used
/*const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let success = true; //false
    if (success) {
      resolve({ username: "ajit", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username; //one value return kiya hai
  })
  .then((username) => {
    //isi ko bolate hai chenig // uapar vala .then se jo bhi return ho ke aayega vah niche vala .then me aayega
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); //ya hamesa chalega hi chalega res/req ho ya na
*/

//(5)VVI Promise ko app .then/.catch se handle karate hai ya async,try/await/catch aap pe depend karata hai
/*const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; //true
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  //Promise ko .then/catch se bhi handle kar sakate hai or async/await se bhi kar sakate hai // but async/await khali used karane se gracefully Error handle nahi hota hai isi liye try/catch me likh kar gracefully Error handle kar sakate hai jo ki sahi hai
  try {
    const response = await promiseFive; //promiseFive yek object hai jo ki app is tarah se handle nahi kar sakate hai Ex:- " promiseFive() eventual complence object hai"
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();*/

//(or)
// async function getAllUsers(){
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
// }
//getAllUsers()

//(or)
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
//getAllUsers()

//(or)
/*fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //chanable/deneval bhi bolate hai
    console.log(data);
  })
  .catch((error) => console.log(error));
*/

//****Note book me digrame dekhe JS Engine vala vahi se pata chalata hai ki kon sa code pahale run hoga ****/
// fetch() global function :-
//The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// Note :- Promise se aap request kiya or vaha se one Error code  404,505 to resolve me lega ki reject me milega :- to vah hamesa resolve me hi milega kyo ki vah Error nahi hai
//Error tab hoga usa case me jab request karahi nahi paya hai browser ko
//yaha to network request hai ise nahi pata hai 404 kya hai

// working fetch me kya-kya kar sakate hai
//(1) Invalid header name :- fetch('https://example.com/', { headers });//Option me jo chahe bhej sakate hai
//(2) URL includes credentials :- fetch('https://user:password@example.com/');
//(3) or bhi hai plese document red link :- https://developer.mozilla.org/en-US/docs/Web/API/fetch
