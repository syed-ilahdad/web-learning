const http=require("http");
const fs =require("fs");
const file=fs.readFileSync("example.txt");

const server=http.createServer((req,res)=>{
    res.writeHead(800,{'content-type:txt'})
})