
// nodejs 连接mongdb 数据库
// mongoose 操作mongodb的步骤

// 引入模块
var mongoose=require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost:27017/users')

// 得到数据库连接句柄
var db=mongoose.connection;

//通过 数据库连接句柄，监听mongoose数据库成功的事件
db.on('open',function(err){
	if(err){
		console.log('数据库连接失败');
		throw err;
	}
	console.log('数据库连接成功')
})

//定义表数据结构
var userModel=new mongoose.Schema({
	id:Number,
	nickname:String,
	mobile:String,
	password:String,
	img:String
},{
	versionKey:false //去除： - -v
})

// 将表的数据结构和表关联起来
// var productModel=mongoose.model('anyname',表的数据结构，表名)
var userModel=mongoose.model("userList",userModel,"userList");


userList=[
	{id:0,nickname:"pwl",mobile:"15556930270",password:"123456",img:'http://pic10.cdn.3songshu.com:81//assets/upload/avatar/5d39458ea4ac48489c1b3b482dad73a9.jpg'},
	{id:1,nickname:"ws",mobile:"15556931933",password:"123456",img:'http://pic10.cdn.3songshu.com:81//assets/upload/avatar/a7d7b230769f74938848360dec2a209c.jpg'},
	{id:2,nickname:"yl",mobile:"15556930268",password:"123456",img:'http://pic10.cdn.3songshu.com:81//assets/upload/avatar/f1bc60cd6aa37609d9a7225eb36e9e1b.jpg'}

]

// 添加数据
// userModel.insertMany(userList,function(err,result){
// 	if(err){
// 		console.log("数据添加失败");
// 		throw err;
// 	}
// 	console.log("数据添加成功:",result);
// })

// 删除数据
// userModel.remove({},function(err){
// 	if(err){
// 		console.log('删除数据失败');
// 		throw err;
// 	}
// 	console.log("删除数据成功");
// })

//导出数据
module.exports={
	userModel:userModel
}

