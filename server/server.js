const express = require('express')
const userRouter = require('./user')
// 新建app
const app = express()

//类似于mysql的表 mongo 文档、字段的概念
app.use('/user',userRouter)
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})