const http = require("http");
const Server = http.createServer((req,res) =>{
    res.end("Hello from the other side AJit kumar");
});
Server.listen(3000,"127.0.0.1",()=>{
    console.log("Listing to the Port no 8000");
})