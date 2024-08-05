//Flattend Array
/*const a = [1, 2, 3, [4, [5, 6]], 7, 8];
function flattenArray(a, flattendArr) {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      flattendArr.push(a[i]);
    } else {
      flattenArray(a[i], flattendArr);
    }
  }
  return flattendArr;
}
console.log(flattenArray(a, []));
*/

//(or)
/*const a = [1, 2, 3, { test: "key" }, [4, [5, 6]], 7, 8];
function flattenArray(a, flattendArr) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flattenArray(a[i], flattendArr);
    } else {
      flattendArr.push(a[i]);
    }
  }
  return flattendArr;
}
console.log(flattenArray(a, []));
*/

//(or) my code
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
