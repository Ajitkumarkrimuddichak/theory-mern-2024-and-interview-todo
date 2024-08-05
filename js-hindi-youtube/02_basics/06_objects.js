// singleton Object Ex:-
// const tinderUser = new Object()
//console.log(tinderUser)

// Non  singleton Object Ex:-
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sayam";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "ajit",
      lastname: "kumar",
    },
  },
}; // ? isaka matalab Optional Chaning Data available hai to thik hai nahi to aage jaiye
// console.log(regularUser.fullname.userfullname.firstname);

/****  Object Merge ****/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }; //Object ke Andar Object merge vali problem
// console.log(obj3);

//**** syntex Object.assign(target,source) :- {} target, obj1 source */
//const obj3 = Object.assign(obj1, obj2, obj4);
//const obj3 = Object.assign({}, obj1, obj2, obj4); //{} Optional hai but dena achhi bat hai ki mera jo object {} isame merge ho jaye
//console.log(obj3);

//const obj3 = { ...obj1, ...obj2, ...obj4 };
//console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
// users[1].email;
// console.log(tinderUser);

/* All methods used In DB output Array me convert kar ke deta hai*/
// console.log(Object.keys(tinderUser)); // All key print and after loop apply kar sakate hai
// console.log(Object.values(tinderUser)); // All value nikala hai
// console.log(Object.entries(tinderUser)); // All Entery mil jayega
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //kya aapake pass isLoggedIn value hai kya

/* Object Destructure */
const course = {
  coursename: "js in React",
  price: "999",
  courseInstructor: "ajit",
};
// course.courseInstructor
const { courseInstructor: instructor } = course;
//console.log(courseInstructor);
//console.log(instructor);

/*Same concept Object Destructure to using React me */
// const navbar = ({ company }) => {};
// navbar(company = "Ajit")

/****  API Object Formete ****/

// {
//     "name": "ajit", // JSON Data
//     "coursename": "js in hindi",
//     "price": "free"
// }

//(or)API Array in Object formate
[{}, {}, {}];
