const http = require("http");
const server =  http.createServer((req,resp) =>{

    console.log("New Req Received" , req.headers)
console.log(req);
    // resp.write("<h1> Ey HTTP Modeule</h1>");
    resp.end(" <h1>Heloo From Server</h1>");

});

server.listen(3000 , () =>{
    console.log("Server Started at port 30000");
}); //  work like a Door