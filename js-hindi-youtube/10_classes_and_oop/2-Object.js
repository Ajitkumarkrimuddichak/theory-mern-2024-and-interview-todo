//**** Yaha pe new keyword ko samajh hai water or js Prototype behavior ko ****//

//(1)JavaScript ka one behaviour hai jise Prototype behavior kahate hai.
/* Note :- Browser me write down & run ****
  const newHero = ["ajit","patna","Ram"] //kuchh bhi Ex:- Array/Object
  newHero :- Enter karo to console kuchh or information deta hai jaise hi newHero ko Expend karata hu to 
   0:ajit
   1:patna
   2:ram
   length 3
   [[prototype]]:Array(0)//yahi prototype hai jisake bare me bat karenge ki kyo exite karata hai//or kya JS ka bihebiyar hai one Ex:-JS ka jo Defoult Bihebiyar hai oh prototypel Bihebiyar hai.
   JS har nahi manata hai jaldi, jo aap expect/khoj kar rahe hai layer by layer check karata hai jab tak Null value nahi mil jata hai, isiko protatypel bihebiyar kahate hai ,
   isi bihebiyar se link ho ke this keyword,new keyword,classes,inheritance kam karata hai,Arrow function ke andar this ka access nahi hota hai isi liye nahi hota kyo ki vaha pe protatype aa jata hai  
*/

//prototype ke andar bahut sara functionality milata hai // to kya mai aapana bhi functionality add kara sakate hai to "Yes" kara sakate hai
//Function to Function ki tarah behaviour karata hi hai //but (or) Agar aap chahe to Function ko Object ki tarah bi behaviour kara sakate hai

/*function multipleBy5(num) {
  //isame function Object ko Refere kar raha hai
  return num * 5;
} //kyo ki End of the Day har koi chhijh jake milati hai Object se "JS Object End of the World hai" Object ka prototype Null hai joki End hai
multipleBy5.power = 2; //kya yah kar sakate hai " . to Object ke sath lagata hai to kya function bhi yek object hai Answer :- Yes" yaha pe to hai
console.log(multipleBy5(5)); //Technically Function bhi Object ko bhi reference karata hai
console.log(multipleBy5.power); //kay yah access ho sakata hai agar ho sakata hai to kyo horaha hai
console.log(multipleBy5.prototype); //{} empty kya hai, jab ham bola  " .prototype ye actually me by defoult kuchh context set hote hai,to jo by default set hota hai protatype ka us method ka this hai //actually me .prototype  hota hai kuchh methods hi nahi kuchh internal property bhi deta hai Ex:- niche vala ko dekhe
*/

//(or)
/*function createUser(username, score) {
  this.username = username; //this se kya hota hai ,this se current context set hota hai
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++; //this ko yad rakhane ka tarika :- jisne bhi bulaya hai usake pass jao
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
const chai = new createUser("chai", 25); //JS me class ke rothugh constructor nahi deta hai // JS new keyword ke rothugh constructor function deta hai
const tea = createUser("tea", 250);
chai.printMe();
*/

/* //Note:- New keyword  theory 
Here's what happens behind the scenes when the new keyword is used:-

A new object is created:-The new keyword initiates the creation of a new JavaScript object.

A prototype is linked:- The newly created object gets linked to the prototype property of 
the constructor function. This means that it has access to properties and methods defined 
on the constructor's prototype.

The constructor is called:- The constructor function is called with the specified arguments
and this is bound to the newly created object. If no explicit return value is specified 
from the constructor, JavaScript assumes this, the newly created object, to be the intended
return value.

The new object is returned:- After the constructor function has been called, if it doesn't 
return a non-primitive value (object, array, function, etc.), the newly created object is 
returned.

*/
