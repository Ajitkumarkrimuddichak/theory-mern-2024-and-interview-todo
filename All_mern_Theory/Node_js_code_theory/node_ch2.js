//File system /core module:-consider modules to be the same as javascript libraries. A set of function you wnat to include in your application.

////synchronous way to access only for one order in customer at a time

//creating a new file
//const fs = require('fs');
//fs.writeFileSync("read.txt","Welcome Ajit kumar");
//fs.appendFileSync("read.txt","new append data")

//Read file
// const fs = require('fs');
// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

//Rename the file
//const fs=require("fs");
//fs.renameSync("read.txt","readwrite.txt");

//CRUD operation using fs module
//const fs = require("fs");
//fs.mkdirSync("Ajit");

// const fs = require("fs");
// fs.writeFileSync("Ajit/bio.txt","my name is ajit kumar patna");


// const fs = require("fs");
// fs.appendFileSync("Ajit/bio.txt","piz bengaluru my name is ajit kumar patna");

// const fs = require("fs");
// const data = fs.readFileSync("Ajit/bio.txt");
// console.log(data);

// const fs = require("fs");
// const data = fs.readFileSync("Ajit/bio.txt", "utf-8");
// console.log(data);


// const fs = require("fs");
// fs.renameSync("Ajit/bio.txt","Ajit/mybio.txt");


// const fs = require("fs");
// fs.unlinkSync("Ajit/mybio.txt");

// const fs = require("fs");
// fs.rmdirSync("Ajit");


//Asynchronous way to access multiple for custemer order in recive at a time
// const fs=require("fs");
// fs.writeFile('read.txt',"Tody is monday and assume day" , (err) => {
//     console.log("File is created");
//     console.log(err);
// });


// const fs=require("fs");
// fs.appendFile('read.txt',"Piz like and share the video" , (err) => {
//     console.log("Task is complated");
// });

// const fs=require("fs");
// fs.readFile('read.txt',"utf-8" , (err,data) => {
//     console.log(data);
// })

//CRUD operation in asynchronous
// var fs = require('file-system');
// fs.mkdir('Ajit',(err)=> {
//     console.log("Folder created");
// });

// var fs = require('file-system');
// fs.writeFile('Ajit/test.txt', 'Ajit is the best student in the world', (err)=> {
//     console.log("File is created");
// })

// var fs = require('file-system');
// fs.appendFile('Ajit/test.txt', ' my name is mukul kumar patna', (err)=> {
//     console.log("File data appended");
// })

// var fs = require('file-system');
// fs.readFile('Ajit/test.txt', 'utf-8', (err,data)=> {
//     console.log(data);
// })

var fs = require('file-system');
fs.rmdir('Ajit', (err)=> {
    console.log("File delete");
})