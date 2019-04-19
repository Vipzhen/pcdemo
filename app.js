 //引入模块
 const express=require('express');
 //引入body-parse中间件
 const bodyParse=require('body-parser');
 // 创建web服务器
 const server=express();
 //监听端口
 server.listen(8000);
 //托管静态资源到public
 server.use(express.static('./public'));
 //配置中间件
//所有的中间件都是给服务器来使用的
 server.use(bodyParse.urlencoded({
	extended:false
 }))
//引入路由模块
 const login=require("./routes/login.js");
 //使用路由器管理路由
 server.use("/login",login);