/*Note :- Callback Hell me jo Samasya tha XMLHttpRequest karane me aata tha */
/* Note :- Callback Hell Ke problem ke vajah se Promises ko laya gaya tha or Fetch API
ko introduced kiya gaya tha.
*/

/* What is Callbacke Hell :- Callback Hell is essentially nested callbacks. Every callback 
depends/waits for the previous callback.
*/

//(1) Callback Hell Asynchronous callback function ?
/*console.log("Start");
function getName(name, callback) {
  setTimeout(() => {
    console.log("Inside Name SetTimeout");
    callback(name);
  }, 2000);
}
function getHobbies(name, callback) {
  setTimeout(() => {
    console.log("Inside Hobbies SetTimeout");
    callback(["Cricket", "Reading", "Dancing"]);
  }, 4000);
}
const nm = getName("Ajit", (nm) => {
  console.log(nm);
  getHobbies(nm, (hobby) => {
    console.log(hobby);
  });
});
console.log("End");*/

//(or)
/*console.log("Start");
const getRollNo = () => {
  setTimeout(() => {
    console.log("API Getting Roll No");
    let RollNo = [1, 2, 3, 4, 5];
    console.log(RollNo);

    setTimeout(
      (roll_No) => {
        //console.log(roll_No);
        const biodata = {
          name: "Ajit Kumar",
          Age: 26,
        };
        console.log(
          `Roll is ${roll_No}. Name is ${biodata.name} and I am ${biodata.Age} Years Old`
        );

        setTimeout(
          (name) => {
            //console.log(name);
            biodata.gender = "male";
            console.log(
              `My Roll ${roll_No}. My Name ${biodata.name} and I am ${biodata.Age}. Years Old. I am alpha ${biodata.gender} `
            );
          },
          2000,
          biodata.name
        );
      },
      3000,
      RollNo[1]
    );
  }, 4000);
};
getRollNo();

console.log("End");*/

// (or) Callback Hell in callback function used
/*function firstFunction(callback) {
  setTimeout(() => {
    console.log("First function complete");
    callback(null, "Result of firstFunction");
  }, 1000);
}

function secondFunction(input, callback) {
  setTimeout(() => {
    console.log("Second function complete with input: " + input);
    callback(null, "Result of secondFunction");
  }, 1000);
}

function thirdFunction(input, callback) {
  setTimeout(() => {
    console.log("Third function complete with input: " + input);
    callback(null, "Result of thirdFunction");
  }, 1000);
}

// Callback Hell
firstFunction((err, result1) => {
  if (err) {
    console.error(err);
  } else {
    secondFunction(result1, (err, result2) => {
      if (err) {
        console.error(err);
      } else {
        thirdFunction(result2, (err, result3) => {
          if (err) {
            console.error(err);
          } else {
            console.log("All functions complete with final result: " + result3);
          }
        });
      }
    });
  }
});
*/
