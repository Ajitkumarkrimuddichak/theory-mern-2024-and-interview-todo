//Own bind method create

// function foo(age, city, phone) {
//   console.log(
//     `Hello ${this.name} , Your age is ${age} , Live In ${city} and Phone Number ${phone}`
//   );
// }
// let p2 = { name: "Ajit" };
// let f1 = foo.myBind(p2, 25, "Patna");

/*Function.prototype.myBind = function (context, ...args) {
  // First parameter Context second argument
  if (typeof this !== "function") {
    throw Error(this + " is not call function");
  }
  context.refFunc = this;
  return function (...otherArgs) {
    context.refFunc(...args, ...otherArgs);
  };
};
let f2 = foo.myBind(p2, 25, "Patna");
f2(12345);*/
