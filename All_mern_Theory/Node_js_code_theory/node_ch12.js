const http = require("http");
const fs = require("fs");
const Server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from the Home Page");
    }else if(req.url=="/about"){
        res.end("Hello from the Apout Page");
    }else if(req.url=="/contact"){
        res.end("Hello from the contact Page");
    }else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            //res.end(data)
        });
        res.end("hello from the userapi side");
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1> 404 Error page doentn't exist </h1>")
    }
});

Server.listen(8000,"127.0.0.1",()=>{
    console.log("Listioning the port no 8000");
})