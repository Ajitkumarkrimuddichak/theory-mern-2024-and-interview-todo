//class based
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("saymyname",()=>{
    console.log("your name is ajit kumar");
});

event.on("saymyname",()=>{
    console.log("your name is Ram kumar");
});

event.on("saymyname",()=>{
    console.log("your name is mukul kumar");
});

event.on("saymyname",()=>{
    console.log("your name is Panta ");
});
event.emit("saymyname");