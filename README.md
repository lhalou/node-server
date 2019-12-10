# node-server
使用nodejs搭建一个静态服务器

## node.js组成部分

- **引入required模块**：我们可以使用`require`指令来载入node.js模块。
- **创建服务器**：服务器可以监听客户端的请求，类似于`Apache、Nginx`等`HTTP`服务器。
- **接受请求与响应请求**:服务器很容易创建，客户端可以使用浏览器或终端发送`HTTP`请求，服务器接受请求后返回响应数据。

## 步骤一：引入required模块

我们使用require指令来载入http模块，并将`实例化的HTTP`赋值给变量`http`。
```
var http = require('http');
```

## 步骤二：创建服务器

使用`http.createServer()`方法创建服务器，并使用`listen`方法绑定到9000端口，函数通过`request,response参数`来接收和响应数据。
```
http.createServer(function(request,response){
    //发送 HTTP 头部
    // HTTP 状态值: 200: ok
    // 内容类型： text/plain
    response.writeHead(200,{'Content-type': 'text/plain'})
    //发送响应数据 "hello world
    response.end('hello world')
}).listen(9000)
```

## 启动静态服务器

```
node xxx.js //启动静态服务器
```

