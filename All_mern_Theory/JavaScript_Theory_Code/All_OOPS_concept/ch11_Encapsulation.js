/*class BankAccount {
  customerName;
  accountNumber;
  #balance = 0; //private value
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = data.now();
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdrow(amount) {
    this.#balance -= amount;
  }
  setbalance(amount) {
    //set keyword
    if (isNaN(amount)) {
      throw new Error("Amount is not a Valid input");
    }
    this.#balance = amount;
  }
  getbalance() {
    //get keyword
    return this.#balance;
  }
}
class currentAccount extends BankAccount {
  transactionLimit = 5000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  #calculateInterest(amount) {
    console.log("calculating interest");
  }
  takeBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log("Taking business Lon" + amount);
  }
}
const obj1 = new currentAccount("Ajit", 2000);
obj1.setbalance(400);
obj1.calculateInterest(41000);
console.log(obj1);
obj1.takeBusinessLoan(4000);*/

//OTHER EXAMPLE
class Student {
  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    if (marks < 0 || marks > 100) {
      console.log("Invalid Marks");
    } else {
      this.marks = marks;
    }
  }
}
var stud = new Student();
stud.setName("John");
stud.setMarks(110); //alert() invokes
console.log(stud.getName() + " " + stud.getMarks());
