/*What is Dialog box/Boxes and Types :- It is used to provide some information to user.
 */
//Ex:-

//1. Alert Box :-
// alert("This is an alert box!");

//2. Confirm Box :-
// if (confirm("Are you sure you want to delete this item?")) {
//     // User clicked OK
// } else {
//     // User clicked Cancel
// }

//3. Prompt Box:-
let userInput = prompt("Please enter your name:", "Harry Potter");
if (userInput != null) {
  console.log("Hello " + userInput);
}
