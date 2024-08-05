/* What is Object Literals :- Object literals is a comma separated list of name-value
pairs inside of curly braces.
*/

/*** Note:- Old concept Ex:- ***/
// let name = "Ajit kumar";
// let course = "mern";
// let obj = {
//   name: "name",
//   course: "course",
// };
// console.log(obj.name);

/*** Note:- New concept Ex:- ***/
// let Fname = "Ajit kumar";
// let course = "mern";
// let obj = {
//   Fname,
//   course,
// };
// console.log(obj);

//(or)
const user = {
  //Execution Context se Relation hai
  username: "Ajit", // Yaha pe sab properties hai
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // methods hai
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this); //current context//(or) this keyword used matalab current context ki bata hota hai //(or) Function context hai //(or) yah sab node invirnoment me run kar rahe hai to this ka method alag gota hai Ex:-Terminal
  },
};
console.log(user.username);
console.log(user.getUserDetails());
/*console.log(this); //Global context // (or) yah pura ko copy kar ke browser pe run kare to this ka methods alaga aata hai
Agar user two banana hai to koi option hi nahi hai hame fir se code likhana parega. to har bar likhana possible nahi hai. Ex:- DB me dal dunag userName,userEmail...,ber-ber likhana na pare to usake liye Constructor function kam me aate hai.  
*/
