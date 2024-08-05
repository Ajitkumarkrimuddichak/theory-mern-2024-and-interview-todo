/*****  Dates Methods *****/

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // mili second value hai
// console.log(myCreatedDate.getTime()); // compare karana hai to aise hi karate hai
// console.log(Math.floor(Date.now() / 1000)); // interview // second me convert kiya hai

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //Date se only for month value nikala hai
// console.log(newDate.getDay()); // Date se only for Day nikala hai

// console.log(
//   `${newDate.getDay()} and the time ${newDate.getMonth()} and the month`
// );

let fullDayOfWeek = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log("Today is:", fullDayOfWeek);
