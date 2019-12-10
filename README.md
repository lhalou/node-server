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

# 创建server.js是如何把我们写的东西展现到服务器上的？

## path模块

`Node.js path模块`提供了一些用于处理路径的小工具，我们可以通过以下方式引入该模块。
```
var path = require('path')
path.join([path1][,payh2][,...])
```
用于连接路径。该方法的主要用途在于：会正确使用当前系统的路径分隔符，`Unix系统是"/"`,`Windows系统是"\"`。
```
path.join(__dirname, 'static')
//__dirname代表当前的目录文件,static当前文件夹名
//path.join(__dirname, 'static')会自动生成当前文件的绝对路径
```

## fs模块（Node.js文件系统）

此模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的`fs.readFile()`和同步的`fs.readFileSync()`。

**静态服务器的原理**
- 当用户访问一个地址为`localhost:8080/index.html`，我们怎么样才能让用户看到我们的文件呢？
- 我们可以通过函数参数`request`得到这个`url`。
- 得到`url`以后，我们只要在本地找到对应的文件就可以了。


## 如何使用node.js来mock数据

**请看node.js**


































































