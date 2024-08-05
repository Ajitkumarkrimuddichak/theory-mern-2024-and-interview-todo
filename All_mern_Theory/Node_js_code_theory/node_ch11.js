// const biodata = {
//     name:"Ajit",
//     Age:24,
//     Address:"patna",
//     amount:212.25
// };
// console.log(typeof biodata);
// const jsondata = JSON.stringify(biodata);
// console.log(jsondata);
// console.log(typeof jsondata);
// const objdata = JSON.parse(jsondata);
// console.log(objdata);
// console.log(typeof objdata);



const fs = require("fs");
const biodata = {
    name:"Ajit",
    Age:24,
    Address:"patna",
    amount:212.25
};
const jsondata = JSON.stringify(biodata);
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("demo");
})
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})

