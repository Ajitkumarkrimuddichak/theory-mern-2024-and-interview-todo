/*class student {
  constructor() {
    console.log("Hello constructor");
  }
}
var obj1 = new student();
var obj2 = new student();*/

//or
class user {
  constructor(name, age) {
    this.myname = name;
    this.myage = age;
  }
}
var obj1 = new user("Ajit", 25);
console.log(obj1);
