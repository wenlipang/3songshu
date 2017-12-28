var express=require('express');
var router=express.Router();
var goodsInfo=require('../model/goods').goodsModel



/* 商品管理页*/
router.get('/good',function(req,res,next){
	res.render('index/index');
})

/* 商品信息页*/
router.get('/goodsInfo',function(req,res,next){
	goodsInfo.find({},function(err,result){
		if(err){
			console.log("数据查询失败");
			throw err;
		}
			res.render('goods/goodsInfo',{title:"商品信息页",goodsInfo:result});
	})
})

/*商品编辑接口*/
router.get('/edit',function(req,res,next){
	goodsInfo.find({},function(err,result){
		if(err){
			console.log('数据查询失败');
			throw err;

		}
		res.render('goods/edit',{title:"商品编辑",goodsInfo:result})
	})
})
module.exports=router;

