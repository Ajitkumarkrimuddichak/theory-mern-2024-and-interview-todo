//same object or function se baya hai 11 vana but yaha pe class used kiya hai
//Classes best get or set mostely used yehi hota hai
class User {
  constructor(email, password) {
    this.email = email; //variable/property ke sath get/set aap laga sakate ho
    this.password = password; //constructor/set dono value ko password ko set karana chah raha hai dono me res laga jata hai
  } //Hame Apana Password ka access kisi ko nahi dena hai to get/set used karate hai

  get email() {
    //variable name same gota hai get/set pe
    //get/set by defoult har class me hote hi hai
    return this._email.toUpperCase();
  }
  set email(value) {
    //yaha pe set or constructor me res laga hai ki value ko mai set karunga
    this._email = value; //private ko access karana ho to # or _ dono se kar sakate hai
  }

  get password() {
    //yeha pe method nahi rahane deta hai actualy "get email" yek property pe work kar raha hai
    //set me hamesa return karana parata hai
    //get class ke bahar se access karana chahate ho
    return `${this._password}ajit`;
  }

  set password(value) {
    //koi value class ke bahar se set karana chahate hai to set hota hai
    this._password = value; //this._password likhane se isaka value set hoga
  } //_password yek private property me defined hai //or ye normal used me nahi aayegi
}

const ajit = new User("h@ajit.ai", "abc"); // constructor Function hai
console.log(ajit.email); //get or set email/password.. ko method nahi rahane deta hai
console.log(ajit.password);
