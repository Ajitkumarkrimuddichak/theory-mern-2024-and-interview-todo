/** What is Call method in js:- It can be used to invoke (call) a method with an owner 
object as an argument (parameter). With call(), an object can use a method belonging to 
another object.

**/ //Ex:-
/*const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "Ram",
  lastName: "Kumar",
};
const person2 = {
  firstName: "Mukul",
  lastName: "Patel",
};
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));*/

//(or)
/*let userDetail = {
  FullName: "Ajit kumar",
  Age: 28,
  Designation: "Software Engineer",
  printDetail: function () {
    console.log(`${this.FullName} and ${this.Age}`);
  },
};
userDetail.printDetail();

let userDetail2 = {
  FullName: "Ram kumar",
  Age: 22,
  Designation: "MERN Engineer",
};
userDetail.printDetail.call(userDetail2);*/

// (or) (sir)
//isaka same concept/working inheritance kar raha hai
// function SetUsername(username) {
//   //complex DB calls
//   this.username = username; //har function ka khud ka this hota hai
//   console.log("called");
// } //is method jo property ko set kiya tha // yah kam US me ho raha hai
// function createUser(username, email, password) {
//   //yah function user create karata hai
//   SetUsername.call(this, username); //yaha se is-pisitali call kara rahe hai// call() method reference hold kar ke rakhata hai //(or)Yaha ka this alag hai this kya hai corrent context
//   /*yeha pe  SetUsername method call ho raha hai or isake andar hi ho raha hai technically to yehi dekha tha ki isake andar call to access hona chahiye  */
//   this.email = email; //Direct set kar diya email,password ko but username ko directely mat karo // yek kam karo ye "SetUsername" method call karo or yah method set kar ke dega username ko to yaha pe username ka access hona chahiye yaha pe
//   this.password = password;
// }
// const result = new createUser("Ram", "ram@fb.com", "123");
// console.log(result);

/*****  Apply Method ******/

/**What is Apply method in js :- The apply method is similar to call, but it takes an 
array of arguments instead of a list of arguments. This is useful if you want to pass 
arguments dynamically.

Note:- Different
1) The call() method takes arguments separately.
2) The apply() method takes argument as an Array.
**/

//Ex:-
/*const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "Ajit",
  lastName: "Kumar",
};
console.log(person.fullName.apply(person1, ["Patna", "India"]));
*/

//(or)
/*function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Employee(name, age, jobTitle) {
  Person.apply(this, [name, age]);
  this.jobTitle = jobTitle;
}
const employee1 = new Employee("Ajit", 30, "Software Engineer");
console.log(employee1);*/
