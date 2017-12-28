var express = require('express');
var router = express.Router();
var model=require('../model/index');
var userData=model.userModel;

// 用户管理页
router.get('/user',function(req,res,next){
	res.render('index/index')
})
// 用户列表
router.get('/userList',function(req,res,next){
	userData.find({},function(err,result){

	console.log("数据库数据",result)
	res.render('user/userList',{title:'用户列表',userList:result})
	})
})
// 用户信息
router.get('/userInfo', function(req, res, next) {
  res.render('user/userInfo', { title: '用户信息' });

  // res.send('respond with a resource');
});

 
	
module.exports = router;
