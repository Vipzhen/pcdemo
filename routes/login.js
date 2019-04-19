const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.post("/login",(req,res)=>{
	var u=req.body.uname
	var p=req.body.upwd;
	var sql="SELECT * FROM jdw_login WHERE uname= ? AND upwd=md5(?)";
	pool.query(sql,[u,p],(err,result)=>{
		if(err){throw err};
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")	
		}
	})
})
module.exports=router;