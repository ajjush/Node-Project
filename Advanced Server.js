const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes ={
    "html" : "text/htlp",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpg",
    "png" : "image/png",
    "js" : "text/javascript",
    "css" : "text/css"
}

http.createServer((req,res)=>{
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(),unescape(uri));
    var stats;

    try{
        status = fs.lstatSync(filename);
    }
        catch(e){
            res.writeHead(404,{'content-type': 'text/plain'});
            res.write('404 not found\n');
            res.end();
            return;
        }
    if(status.isFile()){
        var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200,{'Content-type' : mimeType});
    }
});