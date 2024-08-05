//OOPS------cncept-----Theory------Example----JS
//What is Class in js? Ans:- Class is a blueprient of an object which means
//multiple object can be created by using one class.
//What is object in js? Ans:- object is any real world entity
//What is Static Method in js ? And:- static methods are called without creating object call.
//What is constructor in js ? Ans:- constructor is a member function of a class.

//(1) class or constructor or Method or object
//class Example(1):-
// class ajit {
//   method1() {
//     console.log("Hello method one");
//   }
//   method2() {
//     console.log("Hello method two");
//   }
// }
// let a = new ajit();
// a.method1();
// a.method2();

//Types of Methods and Example (2):-

//(i)constructor method
// construction(){
//   console.log("Hello construction")
// }

//(or)
// class student {
//   constructor() {
//     console.log("Hello constructor function");
//   }
//   method() {
//     console.log("Hello method " + this.name);
//   }
// }
// let a = new student();
// a.name = "ajit kumar";
// a.method();

//(ii)Prototype/Method
// method(){
//   console.log("Hello Method")
// }

//(or)
// class student {
//   constructor(name, age) {
//     this.studentname = name;
//     this.studentage = age;
//     console.log("constructor function");
//   }
//   hello() {
//     console.log("Hello " + this.studentname + ", Age is " + this.studentage);
//   }
// }
// let a = new student("Mukul kumar", 25);
// a.hello();

//(iii)Static Method
// Static method(){
//   console.log("Hello Static method")
// }

//(or)
// class student {
//   constructor(name, age) {
//     this.studentname = name;
//     this.studentage = age;
//     console.log("Hello constructor function");
//   }
//   hello() {
//     console.log(
//       "Hello " + this.studentname + " ,Your Age is " + this.studentage
//     );
//   }
//   static ajit() {
//     console.log("Static function");
//   }
// }
// let a = new student("mukul kumar", 26);
// let b = new student("Ram kumar", 28);
// a.hello();
// b.hello();
// student.ajit();

//(3) Parameterise constructor or multiple object create
// class ajit {
//   constructor(name, age, cls) {
//     this.myname = name;
//     this.myage = age;
//     this.mycls = cls;
//   }
//   metho() {
//     console.log(
//       `Hi my name is ${this.myname} I am ${this.myage} years old and I am in class ${this.mycls}`
//     );
//   }
// }
// let obj1 = new ajit("Ajit", 25, "Btech");
// obj1.metho();
// let obj2 = new ajit("Mukul", 26, "CSE");
// obj2.metho();

//(4)Automatic Call constructor
// class ajit {
//   constructor() {
//     console.log("Hell constructor");
//   }
// }
// var obj1 = new ajit();

//(5) what is Inheritance js ? Ans:- Reusability of code it is known as inheritance.
//(i)Single inheritance
// class father {
//   fmeth() {
//     return "I am Father";
//   }
// }
// class son extends father {
//   smeth() {
//     return "I am Son";
//   }
// }
// var s = new son();
// console.log(s.fmeth());
// console.log(s.smeth());

//or
// class father {
//   fmeth() {
//     return "I am Father";
//   }
// }
// class son extends father {
//   smeth() {
//     return "I am Son";
//   }
// }
// class pota extends son {
//   pmeth() {
//     return "I am pota";
//   }
// }
// var s = new pota();
// console.log(s.fmeth());
// console.log(s.smeth());
// console.log(s.pmeth());

//(ii)multileval inheritance
// class father {
//   fMoney() {
//     return "Father Money";
//   }
// }
// class son extends father {
//   sMoney() {
//     return "Son Money";
//   }
// }
// class Grandson extends son {
//   gMoney() {
//     return "Grand Son Money";
//   }
// }
// var G = new Grandson();
// console.log(G.fMoney());
// console.log(G.sMoney());
// console.log(G.gMoney());

//(or)Other Example Inheritance
// class employee {
//   constructor(name) {
//     this.employeename = name;
//     console.log("constructor : Employee " + name);
//   }
// }
// class manager extends employee {
//   constructor(name) {
//     super();
//     console.log("counstructor : manager " + name);
//   }
// }
// let a = new manager("Ajit kumar");

//(or)
// class employee {
//   constructor(name) {
//     this.employee = name;
//     console.log("constructor : Employee");
//   }
//   info() {
//     console.log("Employee name :" + this.employee);
//   }
// }
// class manager extends employee {}
// let a = new manager("Ajit kumar");
// a.info();

//(or)
// class employee {
//   constructor(name) {
//     this.employee = name;
//     console.log("constructor : employee");
//   }
//   info() {
//     console.log("Employee Name :" + this.employee);
//   }
// }
// class manager extends employee {
//   info() {
//     super.info();
//     console.log("manager Name :" + this.employee);
//   }
// }
// let a = new manager("Ajit kumar");
// a.info();

//(or)
// class employee {
//   constructor(name, age, salary) {
//     this.empname = name;
//     this.empage = age;
//     this.empsalary = salary;
//     console.log("constructor : Employee");
//   }
//   info() {
//     console.log(`Employee class
//         Name: ${this.empname}
//         Age: ${this.empage}
//         Salary: ${this.empsalary}
//         `);
//   }
// }
// class manager extends employee {
//   info() {
//     let ta = 1000;
//     let pa = 4000;
//     let totalsalary = this.empsalary + ta + pa;
//     console.log(`menager class
//         Name: ${this.empname}
//         Age: ${this.empage}
//         Salary: ${totalsalary}`);
//   }
// }
// let a = new manager("Ajit kumar", 25, 2000);
// let b = new employee("Ram kumar", 26, 3000);
// a.info();
// b.info();

//(6)Method overloading :- Note possible in javascript
//What is Method overloading in js ? Ans:- method overloading means that creating multiple method with same name
// in same class with different argument it is known as method overloading

//Ex:-Check this example program but not working
// class base {
//   sum(a, b) {
//     return a + b;
//   }
//   sum(a, b, c) {
//     return a + b + c;
//   }
//   sub(a, b) {
//     return a - b;
//   }
// }
// let obj1 = new base();
// let sum = obj1.sum(10, 20);
// console.log(sum);
// console.log(obj1.sub(20, 10));

//(7)What is JavaScript Abstraction
// Ans:- An abstraction is a way of hiding the implementation details and showing only the functionality
//to the users. In other words, it ignores the irrelevant details and shows only the required one.

//(or)Rules:-Points to remember
//(i) We cannot create an instance of Abstract Class.
//(ii) It reduces the duplication of code.

//Ex:-(i)
// function Vehicle() {
//   this.vehicleName = vehicleName;
//   throw new Error("You cannot create an instance of Abstract class");
// }
// Vehicle.prototype.display = function () {
//   return this.vehicleName;
// };
// var vehicle = new Vehicle();
// //Error :- You cannote create an instance of Abstract Class.

//Ex:-(ii)
// function Vehicle() {
//   this.vehicleName = "vehicleName";
//   throw new Error("You cannot create an instance of Abstract Class");
// }
// Vehicle.prototype.display = function () {
//   return "Vehicle is: " + this.vehicleName;
// };
// //Creating a constructor function
// function Bike(vehicleName) {
//   this.vehicleName = vehicleName;
// }
// //Creating object without using the function constructor
// Bike.prototype = Object.create(Vehicle.prototype);
// var bike = new Bike("Honda");
// console.log(bike.display());

//(main Ex:-) Abstraction in JavaScript
// function Employee(name, age, basicsal) {
//   this.name = name;
//   this.age = age;
//   this.basicsal = basicsal;

//   let bonus = 4000;
//   let calfinalsal = function () {
//     finalsal = basicsal + bonus;
//     console.log("Final Salary:" + finalsal);
//   };
//   this.displayinfo = function () {
//     console.log("Name: " + this.name + " " + "Age: " + this.age);
//     calfinalsal();
//   };
// }
// const obj1 = new Employee("Ajit", 25, 2000);
// obj1.displayinfo();

//(8) what is Polymorphism in js ? Ans:- when one thing has many forms it is known as polymorphism.
//Ex:-(i)
// class A {
//   display() {
//     console.log("A is invoked");
//   }
// }
// class B extends A {}
// var b = new B();
// b.display();

//Ex:- (ii)
// class A {
//   display() {
//     console.log("A is Ajit invoked");
//   }
// }
// class B extends A {
//   display() {
//     console.log("B is mukul invoked");
//   }
// }
// var a = [new A(), new B()];
// a.forEach(function (msg) {
//   msg.display();
// });

//EX:-(iii)
// function A() {}
// A.prototype.display = function () {
//   return "A is invoked";
// };
// function B() {}
// B.prototype = Object.create(A.prototype);
// var a = [new A(), new B()];
// a.forEach(function (msg) {
//   console.log(msg.display() + "<br>");
// });

//(9) what is Encapsulation in js ? Ans:- Act of combineding properties and method related to same object.
//Ex:- (i)
// class Student {
//   constructor() {
//     var name;
//     var marks;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getMarks() {
//     return this.marks;
//   }
//   setMarks(marks) {
//     this.marks = marks;
//   }
// }
// var stud = new Student();
// stud.setName("John");
// stud.setMarks(80);
// console.log(stud.getName() + " " + stud.getMarks());

// Ex:-(ii) Encapsulation Example:- Validate
// class Student {
//   constructor() {
//     var name;
//     var marks;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getMarks() {
//     return this.marks;
//   }
//   setMarks(marks) {
//     if (marks < 0 || marks > 100) {
//       alert("Invalid Marks");
//     } else {
//       this.marks = marks;
//     }
//   }
// }
// var stud = new Student();
// stud.setName("John");
// stud.setMarks(110); //alert() invokes
// console.log(stud.getName() + " " + stud.getMarks());

//Ex:-(iii) Encapsulation Example:- Prototype-based
// function Student(name, marks) {
//   var s_name = name;
//   var s_marks = marks;
//   Object.defineProperty(this, "name", {
//     get: function () {
//       return s_name;
//     },
//     set: function (s_name) {
//       this.s_name = s_name;
//     },
//   });
//   Object.defineProperty(this, "marks", {
//     get: function () {
//       return s_marks;
//     },
//     set: function (s_marks) {
//       this.s_marks = s_marks;
//     },
//   });
// }
// var stud = new Student("John", 80);
// console.log(stud.name + " " + stud.marks);

//(or)main Ex:-
// class BankAccount {
//   customerName;
//   accountNumber;
//   #balance = 0; // # private symbole
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdrow(amount) {
//     this.#balance -= amount;
//   }
//   set balance(amount) {
//     //set or get keyword
//     if (isNaN(amount)) {
//       throw new Error("Amount is not a valid input");
//     }
//     this.#balance = amount;
//   }
//   get balance() {
//     return this.#balance;
//   }
// }
// class currentAccount extends BankAccount {
//   transactionLimit = 5000;
//   constructor(customerName, balance = 0) {
//     super(customerName, balance);
//   }
//   #calculateInterest(amount) {
//     console.log("calculating interest");
//   }
//   takeBusinessLoan(amount) {
//     this.#calculateInterest(amount);
//     console.log("Taking business lon :" + amount);
//   }
// }
// const ajitAccount = new currentAccount("mukul", 2000);
// //ajitAccount.setBalence(400);
// //ajitAccount.calculateInterest(1000);
// ajitAccount.takeBusinessLoan(3000);
// console.log(ajitAccount);

//(10) what is JavaScript Prototype Object?
//Ans:- JavaScript is a prototype-based language that facilitates the objects to acquire properties and features from one another. Here, each object contains a prototype object.
//In JavaScript, whenever a function is created the prototype property is added to that function automatically. This property is a prototype object that holds a constructor property.

//Syntax:- ClassName.prototype.methodName

//What is the requirement of a prototype object?
//Ans:- Whenever an object is created in JavaScript, its corresponding functions are loaded into memory. So, a new copy of the function is created on each object creation.
//In a prototype-based approach, all the objects share the same function. This ignores the requirement of creating a new copy of function for each object. Thus, the functions are loaded once into the memory.

//EX:-
// function Employee(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Employee.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// var employee1 = new Employee("Martin", "Roy");
// var employee2 = new Employee("Duke", "William");
// console.log(employee1.fullName());
// console.log(employee2.fullName());
