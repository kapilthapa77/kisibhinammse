const http=require("http");
//naya changes
//prateek
const server=http.createServer(callback);
function callback(req,res){
    let a=[50,23];
    if(req.method=="POST"){
        arguments.push(1);
    }
    else if(req.methode=="PUT"){
        a[1]=2;
    }
    else if(req.method=="DELETE"){
        a.pop();
    }
    res.write(JSON.stringify(a));
    res.end();
}
server.listen(4000);
