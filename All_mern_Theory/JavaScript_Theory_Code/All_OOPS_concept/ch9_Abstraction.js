function Employee(name, age, basicsal) {
  this.name = name;
  this.age = age;
  this.basicsal = basicsal;
  let bonus = 4000;
  let calfinalsal = function () {
    finalsal = basicsal + bonus;
    console.log("Final Salary:" + finalsal);
  };
  this.displayinfo = function () {
    console.log("Name:" + this.name + " " + "Age:" + this.age);
    calfinalsal();
  };
}
emp1 = new Employee("Ajit", 25, 55000);
emp1.displayinfo();
