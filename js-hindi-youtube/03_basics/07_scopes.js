//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Ajit";

  function two() {
    const website = "Youtube";
    //console.log(username);
  }
  //console.log(website);
  two();
}
one();

if (true) {
  const username = "ajit";
  if (username === "ajit") {
    const website = " youtube";
    //console.log(username + website);
  }
  //console.log(website);
}
//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

//console.log(addone(5));
function addone(num) {
  return num + 1;
}

//addTwo(5); // Before calling not possible
const addTwo = function (num) {
  return num + 2;
};
//addTwo(5);
