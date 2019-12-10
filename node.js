var http = require('http');
var server = http.createServer(function(request,response){

    res.write('hello world');
    switch(req.url){
        case '/getWeather':
            res.end(JSON.stringify({a:1,b:2}));
            break;
        case '/user/123' :
            res.end( fs.readFileSync(__dirname + '/static/user'));
            break;
        default:
            //都没有匹配，则是一个静态文件
            res.end(fs.readFileSync(__dirname + '/static' + req.url))
            
    }
});
server.listen(9000);
