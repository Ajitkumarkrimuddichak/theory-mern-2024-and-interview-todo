/*What is Event Propagation :-  Event propagation in JavaScript refers to 
the mechanism by which events propagate or travel through the DOM 
(Document Object Model) hierarchy. When an event occurs on an element, 
such as a click or keypress, it doesn't just affect that specific 
element but can also affect its parent elements and, in some cases, 
even the entire document.
*/

//Ex:-
document
  .getElementById("nestedDiv")
  .addEventListener("click", function (event) {
    console.log("Nested div clicked");
    event.stopPropagation(); // Stop event from bubbling up
  });

document
  .getElementById("parentSection")
  .addEventListener("click", function (event) {
    console.log("Parent section clicked");
  });
