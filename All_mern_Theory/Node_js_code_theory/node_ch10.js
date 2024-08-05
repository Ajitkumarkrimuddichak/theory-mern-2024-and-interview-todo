const http = require("http");
const Server = http.createServer((req,res) =>{
    if(req.url=="/"){
        res.end("Hello from the other side Home page");
    }else if(req.url=="/about"){
        res.end("Hello from the other About Page");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Error Pages</h1>");
    }
});
Server.listen(3000,"127.0.0.1",()=>{
    console.log("Listing to the Port no 8000");
})