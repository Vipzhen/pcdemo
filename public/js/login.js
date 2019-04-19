(function(){
	var btn=document.getElementById("btn");
	btn.onclick=function(){
		var xhr=new XMLHttpRequest()
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var result=xhr.responseText;
						
				if(result=="1"){
					alert("登录成功");
					window.location.href="http://127.0.0.1:8000/index.html";
				}else{
					alert("登录失败")	
				}
			}
		}
		xhr.open("post","/login/login",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var formdata="uname="+txtusername.value+"&upwd="+txtpassword.value;
		xhr.send(formdata);
	}
 })();