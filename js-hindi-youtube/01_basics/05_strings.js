/* What is String :- A string is a sequence of one or more characters that may consist of 
letters,number or symbols. */

const name = "Ajit"; //string declaration karane ka first way.
const repoCount = 50;
//console.log(name + repoCount + " Value"); //Old version, concate//name s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h Linten feature typeScript ka hai usi se aata hai
// console.log(
//   `Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}` //new version, string interpolation bolate hai// back-tick used karane ka fayada , yaha pe aata hai string interpolation hai kya aap banate hai place holder unake andar jo bhi variable directely inject kara sakate hai
// );

const gameName = new String("Ajit-hc-com"); //string declaration karane ka second way
// console.log(gameName[0]);
// console.log(gameName.__proto__); //__proto__ yaha pe bhi prototype access kiya ja sakata hai jo Example me hai
// console.log(typeof gameName);

// ** String main-main methods **
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));
// console.log(gameName.startsWith("Ajit"));
// console.log(gameName.search("hc"));
// console.log(gameName.trim()); //space remove
// console.log(gameName.replace("hc", "kumar"));
// console.log(gameName.slice(2, 5));
// console.log(gameName.split("A"));

const newString = gameName.substring(0, 4);
//console.log(newString);

const anotherString = gameName.slice(2, 4); //'ajit' o/p:- it
//console.log(anotherString);

const newStringOne = "   Ajit    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ajit.com/ajit%20ajitkumar"; //Browser space nahi samajhata hai to browser convert kar dega "URL encoding me :- %20 "
//console.log(url.replace("%20", "-"));
// console.log(url.includes("ajit")); //pure url me ajit seach karega
// console.log(gameName.split("-")); //- Remove kar dega
// console.log(url.split("a")); // a remove or convert array
