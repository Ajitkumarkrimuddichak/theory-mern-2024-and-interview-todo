/*(1) Object literal :- Object literals is a comma separated list of name-value
pairs inside of curly braces.
Ex:- */

/*const user = {
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
console.log(user.getUserDetails());*/
/*console.log(this); //Global context // (or) yah pura ko copy kar ke browser pe run kare to this ka methods alaga aata hai
Agar user two banana hai to koi option hi nahi hai hame fir se code likhana parega. to har bar likhana possible nahi hai. Ex:- DB me dal dunag userName,userEmail...,ber-ber likhana na pare to usake liye Constructor function kam me aate hai.  
*/

//(2) Constructor function Ex:- new kya karata hai //new sirf allow karata hai ki aap one Object literal se  muliple instances bana sako
// const promiseOne = new Promise()
// const date = new Date()  // new ko hi Constructor function kaha te hai.

// Constructor function kam me kaise aate hai. Ex:-
//(or)userOne ke andar kumar aagaya hai hamane to userTwo to print hi nahi kiya hai userTwo over ride kar diya joki ham nahi chahate hai
//Kai yese Satuation hoti hai Ex:- Promise Date jaha pe new instance hi chahiye " old vali value ko effect nahi karo ,this bhagega or ,apana-apana context/Excution context rakho vaha pe"

/*function User(username, loginCount, isLoggedIn) {
  this.username = username; //Left vala variable hai or Right vala jo aap pass kar ke de rahe ho
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //yaha se chaho to return this kar sakate ho // return this karate hi kya hu o jo object tha na oh pass on kar diya ab, pure value ko access kar sakata hai
  return this; //function banaya ho jo ki one tiem hi run hota hai/one global excution context hota hai
}
const userOne = User("ajit", 12, true);
const userTwo = User("kumar", 11, false); //problem yaha se aati hai jo nahi chahate userTwo to print hi nahi kiya, yaha pe value over-ride kar diya jo galat hai Ex:-one project me kam ho raha hai to code ko koi bhi modified kar dega
console.log(userOne);*/

//(or)override nahi hoga kyo ki 'new' used karane se naya instance milata hai // or sahi bhi hai
/*function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // one method banaya hai joki available rahega output me 
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; //agar this to return nahi kiya to bhi implicitly defined hota hi hai
}
const userOne = new User("ajit", 12, true); // Promise vala me "new" keyword used kar raha tha to samajh me aaya, Constructor function kya karata hai har bar one new instence/copy deta hai us copy ke sath jo karo vah aapake havale hai jo likho oriznal/dusare effext nahi hote hai
const userTwo = new User("AurPatna", 11, false); //naya instance lene ke liye "new" ko add kiya
console.log(userOne);
console.log(userTwo);*/

// Note :-(1) Jab bhi aap new keyword used karate hai to sabase pahale yek Empty object create hota hai jise instance bola jata hai.
//(2) Yek Constructor function call hota hai new keyword ke karan. "ye kya karata hai aapake jitane bhi argument ko pack karata hai or aap ko de deta hai"
//(3) Ye jo this keyword hai jo aapane argument banaye hai vah this me injekat ho jate hai
//(4) Aapako mil jate hai function ke andar

//(or) Extra knowledge
/*function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("ajit", 12, true);
console.log(userOne.constructor); /* Agar constructor available hai to kya mai property 
dekh sakata hu kya mai ki, constructor actually available hota hai kya hota hai to usake 
andar kya-kya hota hai ,run kiya to aaya hai, [Function: User] ,constructor property kya 
hota hai:-reference hota hai khud hi ke bare me.yaha pe Encapsulation bhi ho raha hai or 
Abstraction bhi ho raha hai user ko nahi pata ki ,pahala Abstraction to yeh hai ki 
constructor method bhi hai or greeting work kaise kar raha hai internally,Encapsulation 
bhi yahi dekhane ko mil raha hai ki userOne ke andar hamane Encapsulation kar ke rakh diya 
hai user ko nahi matalab ki username ke property me jake store ho raha hai ki kaha pe jake 
store ho raha hame koi matalab bhi nahi hai  
*/

//(or) Kya userOne or userTwo alag-alag hai kya, instanceof of operator se check hota hai
/*function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("ajit", 12, true); // Without new keyword used kiye check karane pe same nahi aayega
const userTwo = new User("patna", 10, false);
console.log(userOne instanceof User); // true
console.log(userTwo instanceof User); // true
*/
