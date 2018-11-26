const mongoose = require('mongoose')
// 链接mongo
let DB_URL = 'mongodb://127.0.0.1:27017/imooc-chart'
mongoose.connect(DB_URL, { useNewUrlParser:true })
// mongoose.connection.on('connected', 
// function () {console.log('mongo connect success')})
const models = {
  user: {
    'user': {type:String, require: true},
    'pwd': {type:String, require: true},
    'type': {type: String, require: true},
    avatar : {type:String},
    desc: {type:String},
    // 职位名
    title: {type:String},
    // 如果是boss
    company: {type: String},
    money: {type:String},
    
  },
  chat: {
    chatid: {type:String, require: true},
    from: {type:String, require:true},
    to: {type:String, require:true},
    read: {type: Boolean, default:false},
    content: {type: String, require: true, default: ''},
    creat_time: {type: Number, require: true, default: new Date().getTime()}
  }
}
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}
