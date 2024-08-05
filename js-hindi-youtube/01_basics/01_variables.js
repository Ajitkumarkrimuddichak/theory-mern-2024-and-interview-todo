const accountId = 144553; //value overide and Re-declaration is not possible.Block level scope and let,const does't adds window object
let accountEmail = "ajit@google.com"; // value overide is possible and Re-declaration is not possible.Block level scope and let,const does't adds window object
var accountPassword = "12345"; // value overide and Re-declaration is possible. functional level scope and var adds itself to the window object.
accountCity = "Bihar"; // variable value defined
let accountState; //JS undefined means a variable has been declared but not assigned value.

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

//console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// var and let 8 Bytes of memory consume

/* Difference == vs ===

// == in JS is used for comparing two variables, but ignores the datatype of variable.
// === in JS is used for comparing two variables, but === operator also checks datatype 
and compares two value.

// What is Variable :- Variable are the name of memory location where we store data.

*/
