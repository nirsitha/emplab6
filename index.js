var http=require('http');
const PORT=process.env.PORT ||3000;
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    if(req.url=='/'){
    fs.readFile('./index.html',null,function(err,data){
        if (err) throw err;
        else{
            res.write(data);
        }
        res.end;
    })
    }
    if(req.url=='/output'){  
    fs.readFile('./output.html',null,function(err,data){
        if (err) throw err;
        else{
            res.write(data);
        }
        res.end;
    })
}
}).listen(PORT);
console.log(PORT);