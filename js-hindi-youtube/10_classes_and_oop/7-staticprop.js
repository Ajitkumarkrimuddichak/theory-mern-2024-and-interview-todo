//Static Property / static prop
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    // mongodb automatic Id generate karata hai usi type kar rahe hai is method se
    //static:-us method ko/us property ko access hone se rok deta hai
    return `123`; //man lo unick Id generate kar rahe hai //math()se kar sakate hai
  } //kai bar yese bahut sara satution hoga  ki is method ka access har us Object ko nahi dena chahate hai jo is class se insiyet hua hai mathod ke aage static laga do
}
const hitesh = new User("ajit");
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username); //super constructor
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
//console.log(iphone.createId());
