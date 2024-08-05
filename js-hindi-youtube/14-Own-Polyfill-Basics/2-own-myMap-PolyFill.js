//browser console used karo
//This concept internal method
// let arr = [1, 2, 3, 4];
// arr.map((item, index, self) => {//callback function call map() ka defination hai vahi se call hota hai
//   return item * 2;
//   //console.log(item * 2);
// });

//arr -: then enter no change array value

//own MyMap() method created
Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw Error("Undefined is not a function");
  }
  //console.log("myMap arr :", this);
  const newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};
//arr.myMap(() => {});//arr hai jo this ko represent kar raha hai

// after check
arr.myMap((item) => {
  return item * 4;
});
