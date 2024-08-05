// ES6
//jaise hi class se one object initialise hoga "new keyword ko kam me loge" to constructor automatic call hoga
/*class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    //method
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}
const Resu = new User("ram", "ram@gmail.com", "123");
console.log(Resu.encryptPassword());
console.log(Resu.changeUsername());*/

// behind the scene // class nahi hota to kaise karate hai//function object ke tarah bhi vehave karata hai joki Ex:- hai
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
