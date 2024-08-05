/** What is Bind method in js:- The bind method in JavaScript is used to create a new 
function that, when called, has its this keyword set to the provided value, with a given 
sequence of arguments preceding any provided when the new function is called. It is a 
method of function objects.

(or) Bind creates a new function that will force the this inside the function to be the 
parameter passed to bind().
**/

// Example 1: Basic Usage of bind
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const boundFullName = person.fullName.bind(person);
// console.log(boundFullName());

//Example 2: Pre-Specifying Arguments with bind
// function greet(greeting, punctuation) {
//   return greeting + ", " + this.name + punctuation;
// }
// const person = { name: "Alice" };
// const greetAlice = greet.bind(person, "Hello");
// console.log(greetAlice("!"));

//Example 3: Using bind in Event Handlers
function Button(label) {
  this.label = label;
  this.click = this.click.bind(this); // Bind `this` to the method
}
Button.prototype.click = function () {
  console.log(this.label + " button clicked");
};
const button = new Button("Submit");
const buttonElement = document.createElement("button");
buttonElement.textContent = button.label;
buttonElement.addEventListener("click", button.click);
document.body.appendChild(buttonElement);

// When the button is clicked, it will output: "Submit button clicked"
