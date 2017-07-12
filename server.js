var express = require('express');
var server = express();

server.set('port', (process.env.PORT || 8080));
server.use(express.static(__dirname + '/views/html'));

server.get('/', function(req, res, cb){
    res.sendFile('form.html');
    
    return cb();
});

server.listen(server.get('port'), function(){
    console.log("le server ecoute sur: %s", server.get('port'));
});