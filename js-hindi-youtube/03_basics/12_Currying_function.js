/* What is Currying Function :- Currying is a function that takes multiple arguments is 
transformed into a series of functions, each taking a single argument.
*/
//(6) Currying Function ?
function ajit(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a + b + c + d + e;
        };
      };
    };
  };
}
var total = ajit(5)(4)(3)(2)(1);
console.log(total);
