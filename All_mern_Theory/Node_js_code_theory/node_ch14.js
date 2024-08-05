const fs=require("fs");
const http = require("http");

const Server = http.createServer();
Server.on("request",(req,res)=>{
    const rstream =fs.createReadStream("read.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });

    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("file not found");
    });
});
Server.listen(8000,"127.0.0.1");