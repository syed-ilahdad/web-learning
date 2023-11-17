const filesys=require("fs");

filesys.writeFileSync("example.txt","this is an example");

let text = filesys.readFileSync("example.txt","utf-8");
console.log(text);
text=text.replace("example","file");
console.log(text);