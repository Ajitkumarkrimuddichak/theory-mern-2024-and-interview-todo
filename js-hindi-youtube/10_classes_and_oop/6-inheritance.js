class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    //constructor over ride kiya hai
    super(username); //super keyword call kiya or super() automatic refere karega ki kon si class extends kar rahe the to "User class" ko kar rahe the to us class ke andar jata hu  or constructor ke andar jata hu or sath me this le jake username set kar dunga
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai", "chai@teacher.com", "123");
//chai.logMe();
//chai.addCourse(); //kiske pass kisaka accesshi check
const masalaChai = new User("masalaChai");
//masalaChai.logMe();
//masalaChai.addCourse();//No access
//console.log(chai === masalaChai);//false dono yek nahi h
//console.log(chai === Teacher);//false dono yek nahi h
console.log(chai instanceof User);
