//Question how to convert PI=3.1415926535 to convert 4/3 ho sakati hai ya nahi ho sakati hai to kyo

/* Note:- Object ka to direct access hai hamare pass. 
Object ka bahut sara property hai,browser pe dekho Ex:- const myObj = {username:"ajit"}
Object ke khud ka bhi property hai Ex:- constructor,new,class,getOwnPropertyDescriptor...
*/

/* console.log(Math.PI);//sab log bolate hai ki ye universial constant hai jo change nahi ho sakata , mai bola kyo nahi ho sakata ise pata karo
   Math.PI = 5 //value ko override karane ka kosis kiya but nahi hua
   console.log(Math.PI);
*/

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //Yaha se Math ke property dekhane ke liye used kiya //or bhi property hai jo hidden hota hai.
//console.log(descripter);
/*
{ // PI ke value ko hard coded value likh rakha hai
  value: 3.141592653589793, 
  writable: false, //isako false kar rakha hai //yah implementation hai core JS ka, isako change karoge to nahi hoga
  enumerable: false,//nahi hai
  configurable: false//nahi hai
}
*/

/* To kya ham is tarah se hamare bhi kuchh Object ke Property de sakate hai ki koi hamara bhi framework or library
used kare to kuchh hard coded value hai jo unako de-de ki vah change hi na kar paye, to ha yesa possible hai ki unake property or flage value le sakate hai
or us property or flage value ko change bhi kar sakate ho
*/
// Ex:-
const ownMathPIVal = {
  name: "New Book",
  price: 250,
  isAvailable: true,

  orderBook: function () {
    console.log("Book nhi bni");
  },
};
console.log(Object.getOwnPropertyDescriptor(ownMathPIVal, "name")); //is method se magana hoga ki ownMathPIVal ke value do, to hi deha value

Object.defineProperty(ownMathPIVal, "name", {
  // writable: false,
  enumerable: true, //false karane pe Name vala print nahi hoga
});
//console.log(Object.getOwnPropertyDescriptor(ownMathPIVal, "name"));

/*value print */
for (let [key, value] of Object.entries(ownMathPIVal)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
