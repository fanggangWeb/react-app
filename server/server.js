const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const app = express()
// work with express 统一接口
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function (socket){
  // console.log('user login')
  socket.on('sendmsg', function (data) {
    const {from, to, msg} = data
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid,from,to,content:msg},function (err,doc) {
      // console.log(doc._doc)
      io.emit('recvmsg', Object.assign({},doc._doc))
    })
    // console.log(data)
    // io.emit('recvmsg',data)
  })
})
// 新建app
app.use(cookieParser())
app.use(bodyParser.json())
// 类似于mysql的表 mongo 文档、字段的概念
app.use('/user', userRouter)
server.listen(9093, function () {
  console.log('Node app start at port 9093')
})