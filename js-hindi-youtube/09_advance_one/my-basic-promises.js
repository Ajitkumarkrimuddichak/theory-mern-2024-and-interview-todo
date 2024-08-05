/* Note :- Callback Hell me jo Samasya tha XMLHttpRequest karane me aata tha 
   Note :- Callback Hell Ke problem ke vajah se Promises ko laya gaya tha or Fetch API ko intruduce kiya gaya tha.
   Note :- Learning Steps:- Synchronous/Asynchronous => callback hell => promise => catch/then => async & await => async try await catch => Fetch Api => axios
   Note :- Promise return "object"
Promise Defination :- A Promise is an object representing the eventual completion or 
failure of an asynchronous operation.
*/
// **** Browser Console pe check kare ****
// const myPromise = new Promise(() => {}); // Promise create
// console.log(myPromise);

//*** Promise Fast ho raha hai ****/
// const myPromise = new Promise((ArgumentRes, ArgumentRej) => {
//   //Argument pass kiya jo kuchh bhi le sakate ho
//   ArgumentRes(); //call
// });
//console.log(myPromise);

// const myPromise = new Promise((ArgumentRes, ArgumentRej) => {
//   ArgumentRes("Ajit"); //value pass
// });
// console.log(myPromise);

// const myPromise = new Promise((ArgumentRes, ArgumentRej) => {
//   ArgumentRes({ name: "Ajit" }); //object pass
// });
// console.log(myPromise);

/**** Yaha pe promise Time se hoga ****/
// const myPromise = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     resolve({ name: "Ajit" });
//   }, 4000);
// });
// console.log(myPromise);

/* Syntex :- 
const myPromise = new Promise((resolve, reject) => { // This is Executor function hai or two Parameter accept karata hai "(resolve,reject)=>{}" // Ye bhi yek " 'resove' function" or reject bhi yek function hai.
    // example code here
    if (operation is successful ) 
      {
        resolve(value);  // fulfilled// successfully // function calling//return value
      } 
      else {
        reject(reason);  // failed//Error
      }
});
//'myPromise' promise one object return karata hai
 myPromise
    .then(value => {//then yek special method hai or one callbacke accept karata hai // then/catch/fiallyn automatic call hote hai// karan 'then' ke andar callbacke function hai vahi call hoga.
        // handle code example
    })//promise jaise hi resolve hoga fir 'then' method call hota hai.  
    .catch(error => {//catch yek special method hai or one callbacke accept karata hai
        // handle the error code
    })
    .fiallyn(() => { //finally hamesa chalega Resolve/Reject
        // execute code 
  });
*/

//(1) Promise // browser behind the seen handle karata hai //Asynchronus code hai //single thread/event loop used hota hai.
//(i)resolve/res Ex:-
/*const proj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4];
    resolve(roll_no);//resolve kar ke jo bhi isame dalenge to direct then me chala jata hai
  }, 2000);
});
proj1.then((RollNo) => {
  console.log(RollNo);
});*/

//(ii) reject/rej Ex:-
// const proj1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let roll_no = [1, 2, 3, 4];
//     reject("Error while communicating");
//   }, 2000);
// });
// proj1
//   .then((RollNo) => {
//     console.log(RollNo);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//(iii) resolve/reject Ex:-
/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 2000);
});
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise has been settled.");
  });
*/

//(iv)Function with Promise and Async & Await EX:-
/*function asynchronous_operational_method() {
  let Fpromise = new Promise((resolve, reject) => resolve("Hello"));
  let Spromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi Ram");
    }, 1000);
  });
  let combined_promise = Promise.all([Fpromise, Spromise]);
  return combined_promise;
}
async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
}
display();*/
