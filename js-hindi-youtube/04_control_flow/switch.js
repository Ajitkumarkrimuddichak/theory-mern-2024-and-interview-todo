/* Switch statement in JS:- It is used to select one or multiple decisions */

// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = "feb";
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
