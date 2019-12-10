var http = require('http');
var server = http.createServer(function(req,res){
    res.write('hello world');
    switch(req.url){
        case '/getWeather':
            res.end(JSON.stringify({a:1,b:2}));
            break;
    }
});
server.listen(9000);