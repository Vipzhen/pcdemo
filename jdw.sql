#设置客户端编码为UTF8
SET NAMES UTF8;
#创建数据库表jdw
DROP DATABASE IF EXISTS jdw;
CREATE DATABASE jdw CHARSET=UTF8;
#进入jdw
USE jdw;
#用户登录表
CREATE TABLE jdw_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
#插入数据
INSERT INTO jdw_login VALUES
(NULL,"user1",md5("123456")),
(NULL,"user2",md5("123456")),
(NULL,"user3",md5("123456")),
(NULL,"user4",md5("123456")),
(NULL,"user5",md5("123456"));
