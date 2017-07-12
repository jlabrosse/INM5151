var express = require('express');
var server = express();

server.set('port', (process.env.PORT || 8080));

//probably useless example function
function reponsehttp(res, body) {
    res.writeHeader(200, {"Content-type":"text/html"});
    res.write(body);
    res.end;
};

//example 1
server.get('/', function(req, res){
    console.log("hi");
    res.sendFile(__dirname + '/testFile.html');
});

//example 2
server.get('/oi', function(req, res){
    reponsehttp(res, "Hello World");
});

//real shit son
server.get('/home', function(req, res){
    res.sendFile(__dirname + '/views/html/form.html');
});


//do not touch
server.listen(server.get('port'), function(){
    console.log("server is listening on: %s", server.get('port'));
});
