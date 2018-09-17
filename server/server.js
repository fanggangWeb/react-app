const express = require('express')
const mongoose = require('mongoose')
// 链接mongo
let DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL, { useNewUrlParser:true })
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
//类似于mysql的表 mongo 文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String, require:true},
  age: {type:Number, require:true}
}))
// 新增数据
// User.create({
//   user: 'xiaoming',
//   age: 19
// }, function (err, doc) {
//   if(!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })
// 删除数据
User.remove({age: 18},function (err, doc) {
  console.log(doc)
})
// 修改数据
User.update({'user': 'xiaoming'}, {'$set': {age: 26}},function(err,doc) {
  console.log(doc)
})
// 新建app
const app = express()
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
  // res.json({name: 'garett second', age: '25'})
  // User.find({user: 'xiaoming'}, function (err, doc) {
  //   res.json(doc)
  // })
  User.findOne({user: 'xiaoming'}, function (err, doc) {
    res.json(doc)
  })
})
// app.delete('/delete', fucntion () {

// })
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})