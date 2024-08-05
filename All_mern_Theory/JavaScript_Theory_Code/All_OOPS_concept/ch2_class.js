class student {
  constructor(name, age, cls) {
    this.myname = name;
    this.myage = age; //Property
    this.mycls = cls;
  }
  biodata() {
    console.log(
      `Hi my name is ${this.myname}. I am ${this.myage}. your old and i am in class ${this.mycls}.`
    );
  }
} //End  one class
//mutiple object create
let obj1 = new student("ajit", 25, "B.tech");
obj1.biodata();
let obj2 = new student("mukul", 26, "cse");
obj2.biodata();
