/*What is Arrow Function :- An arrow function is a shorter syntax compared to 
function expression. Arrow function are always anonymous.

Note :- Before  Calling is note Possible &  Only for After calling Possible.
Note :- The Arrow function does not have a reference to 'this keyword'.

// Arrow function does't have a reference to 'this keyword' kyo nahi karata hai to usi ko samajhane ex:-

const user = {
  username: "Ajit ",
  price: 999,

  welcomeMessage: function () {
    //console.log(`${this.username}, welcome to website`); // this hai jo current context ko refere karata hai
    //console.log(this); // isi line se pata chala ki current context kya hai
  }, // Yaha pe jo bhi access karana hai to this.jisako karana karo
}; //current context create kiya hai joki { curly ke andar me likha hai}

user.welcomeMessage(); //Yaha tak to current context same tha
user.username = "Ram"; //Yaha pe context change kar diya hai,ab isake bare me bat ho rahi hai
user.welcomeMessage();

/*Note:- Yaha pe bhi to kuchh current context hoga to current context hai kya.
context:-ka matalab hai values, usake andar jo-jo variable jo ki kya hold kar rahe hai 
*/
// console.log(this); // Yaha pe current context empty {} hai , kyo ki ham "Node Environment" me hai , Yaha se "this" kisako refere kar raha hai yek empty Object ko , kyo ki Global ke andar koi context hi nahi hai.
// browser ke console me print karane pe different result aayega, console.log(this) // interview me puchh jayega ,What is global object :- Ans => window object

/** Difference between Normal function And Arrow Function jo Ex:- Niche ka dono hai**/

/*function NormalFun() {
  let username = "Ram";
  //console.log(this); //kisi function ke anadar this ko print karane pe bahut sara values aata hai , this me kuchh to raha hai jise jo chahiye oh le sakata hai
  //console.log(this.username); //not working  'this keyword' in function, only for working object
}
NormalFun();*/

/**Start Arrow Function **/
/*const ArrowFun = () => {
  let username = "ajit";
  console.log(this); //Empty {} object print milata hai
  console.log(this.username);
};
ArrowFun();*/

// const addTwo = (num1, num2) => { //curly {} brackets used kiya to return likhana hi hoga or Exceptely return
//     return num1 + num2
// }
//console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>  num1 + num2 //no used {} to isako Implicate return kahate hai or nahi used karate hai return

//(or) const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "ajit" }); // Object return karana hai to () used karana hi hoga Ex:-
//console.log(addTwo(3, 4));
