import React from 'react'
import {List, InputItem, NavBar,Icon} from 'antd-mobile'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import { getChatId } from '../../util'
const socket = io('ws://localhost:9093')

@connect (
  state=>state,
  {getMsgList, sendMsg, recvMsg}
)
class Chat extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
  }
  componentDidMount () {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
    // socket.on('recvmsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }
  handleSubmit () {
    // socket.emit('sendmsg',{text:this.state.text})
    // this.setState({text:''})
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({from, to, msg})
    // console.log(this.state)
    this.setState({text: ''})
  }
  render () {
    const userid = this.props.match.params.user
    const users = this.props.chat.users
    const Item = List.Item
    if(!users[userid]) {
      return null
    }
    const chatid = getChatId(userid, this.props.user._id)
    const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid == chatid)
    return (
      <div id='chat-page' style={{marginTop: '45 0'}}>
        <NavBar 
          mode="dark"
          icon={<Icon type="left"></Icon>}
          onLeftClick={()=>{
            this.props.history.goBack()
          }}
        >
          {users[userid].name}
        </NavBar>
        {/* {this.props.chat.chatmsg.map(v=>{ */}
        {chatmsgs.map(v=>{
          const avatar = require(`../img/${users[v.from].avatar}.png`)
          return v.from == userid?(
            <List key={v._id}>
              <Item
                thumb={avatar}
              >对方发来的：{v.content}</Item>
            </List>
          ):(
            <List key={v._id}>
              <Item extra={<img src={avatar}/>} className='chat-me'>
              我发出去的:{v.content}
              </Item>
            </List>
          )
        })}
        <div className="stick-footer">
        {this.state.msg.map(v=> {
          return (<p key={v}></p>)
        })}
          <List style={{position:'fixed',bottom:0,left:0,width:'100%'}}>
            <InputItem
              placeholder='请输入'
              value = {this.state.text}
              onChange={v => {
                this.setState({text:v})
              }}
              extra={<span style={{zIndex:1}} onClick={()=>this.handleSubmit()}>发送</span>}
            >
            </InputItem>
          </List>
        </div>
      </div>
    )
  }
}
export default Chat