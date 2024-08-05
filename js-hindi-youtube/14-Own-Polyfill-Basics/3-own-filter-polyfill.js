//browser console used karo
//This concept internal method
// let arr = [1, 2, 3, 4];
// arr.filter((item, index, self) => {//callback function call filter() ka defination hai vahi se call hota hai
// if(item>1){
//   return item
//}
// });

//own MyFilter() method created
Array.prototype.myFilter = function (callback) {
  if (!callback) {
    throw Error("Undefined is not a function");
  }

  const arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
//arr.myFilter(() => {});//arr hai jo this ko represent kar raha hai

// after check
arr.myFilter((item, i, self) => {
  return item > 2;
});
