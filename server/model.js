const mongoose = require('mongoose')
// 链接mongo
let DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL, { useNewUrlParser:true })
mongoose.connection.on('connected', 
function () {console.log('mongo connect success')})