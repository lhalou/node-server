var http = require('http'); //创建服务器模块
var path = require('path');//处理URL模块
var fs = require('fs');//读写文件
var url = require('url'); //解析URL


function staticRoot(staticPath, req, res){
    console.log(staticPath);

    console.log(req.url);
    var pathObj = url.parse(req.url, true); //解析url，得到一个对象
    console.log(pathObj);

    //如果URL后没有/index.html，默认会读取index.html
    if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html'
    }


    //得到文件的具体请求路径
    var filePath = path.join(staticPath, pathObj.pathname);

    // var fileContent = fs.readFileSync(filePath,'binary')
    // res.write(fileContent, 'binary')
    // res.end()

    //异步的方式读取文件
    fs.readFile(filePath, 'binary', function(err, fileContent){
        if(err){
            console.log('404');
            res.writeHead(404, 'not found');
            res.end('<h1>404 Not Found</h1>')
        }else{
            console.log('ok');
            res.writeHead(200, 'OK');
            res.write(fileContent, 'binary');
            res.end()
        }
    })


}

console.log(path.join(__dirname, 'static'));

var server = http.createServer(function(req, res){
    staticRoot(path.join(__dirname, 'static'), req, res) //__dirname代表当前的目录文件,static当前文件夹名
    //path.join(__dirname, 'static')会自动生成当前文件的绝对路径
});

server.listen(8080);
console.log('visit http://localhost:8080' );