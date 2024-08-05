//OS module:-The os module provides operating system-related utility methods and properties it can be accessed using.

//const os=require("os");
//console.log(os.arch());
//console.log(os.hostname());
//console.log(os.platform());
//console.log(os.tmpdir());
//console.log(os.type());


const os = require("os");
const freeMemory = os.freemem();
//console.log(freeMemory)
console.log(`${freeMemory/1024/1024/1024}`);
