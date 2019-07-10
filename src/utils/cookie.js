

export default {
	//设置cookie
	getCookie:function (key){
		var cookie=document.cookie;
		var arr=[];
		var oName=[];
		var oValue=[];
		//将数组以；分割
		var newcookie=cookie.split(";");
		for(var i=0;i<newcookie.length;i++){
			//将数组以=分割
			arr.push(newcookie[i].split("="));
		}
	//        循环添加key值和value值
		for(var j=0;j<arr.length;j++){
			oName.push(arr[j][0]);
			oValue.push(arr[j][1]);
		}
		//清除空格 判断返回数组
		for(var k=0;k<oName.length;k++){
			oName[k]=oName[k].replace(" ","");
			if(oName[k]==key){
				return [oName[k],oValue[k]];
			}
		}
	},

	//删除cookie
	setCookie: function (key,value,time){
		time=new Date();
		time.setDate(time.getDate()+30);
		document.cookie=`${key}=${value};expires=`+time;
	},
	
	//获取指定cookie
	clearcookie: function () {
		setcookie(key,getcookie(key)[1],-1)
		// getcookie(key)[1]获得两个值，一个k值，一个value,需要的值为value
		// -1为过期事件
		// document.cookie='name:value;expires=time';
	},
	
}
