//**** Yaha pe Prototype ko samajh ****/
/* Question hai
// let myName = "Ajit     "//hame output me Letter length alag de or space length alag de
// let mychannel = "kumar     "//hame code aisa karana ki sare string ke sath by Defoult aaye trueLength
// console.log(myName.trim().length)//Low IQ vala bat hai
// console.log(myName.trueLength);//High IQ vala bat Ise used kar ke Dynamic concept Access karana hai
// Note :- Jaha pe string ho to sare string pe by defoult  one method aa jaye jisaka name ho trueLength.
*/

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
// same Polyfill
/* Hamane Object ke andar hi extra super power dal diya to function,Array,String sab Object se hi to gujar rahe hai to sabhi ke pass power aayega  */
Object.prototype.ajit = function () {
  console.log(`Ajit is present in all objects`);
}; //Is property ko main Object me inject kara diya hai,isi liye sabhi ko Access mila hai
Array.prototype.heyAjit = function () {
  console.log(`Ajit says hello`);
}; //Ise hamane property ko Main Object me inject nahi kiya hai // Ise hame only for Array me Inject kiya hai // to kya ise Main Object ko power milega to nahi
// heroPower.ajit(); //heroPower kaha se aaya hai Object se hi to aaya //heroPower ke pass ajit ka Access hai
// myHeros.ajit(); // Object se hoti hui jati hai to myHeros ke pass bhi  ajit ka Access hai
// myHeros.heyAjit();
// heroPower.heyAjit(); //main Object No Access able

// Prototypel inheritance
const User = {
  name: "Ram",
  email: "ram@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

//(or)New/modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

/*
// Old Syntex 
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;*/

//Answer
/*let anotherUsername = "AjitAurCode     ";
String.prototype.trueLength = function () {
  //console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"Ajit".trueLength();
"patnabihar".trueLength();*/
