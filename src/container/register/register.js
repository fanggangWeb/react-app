import React from 'react'
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
@connect(
  state => state.user,
  {register}
)
class Register extends React.Component{
  constructor (props) {
    super(props) // boss或者niuren
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister () {
    this.props.register(this.state)
    // console.log(this.state)
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
          <InputItem
            type="password"
            onChange={v=>this.handleChange('pwd', v)}>
            密码
          </InputItem>
          <InputItem
            type="password"
            onChange={v=>this.handleChange('repeatpwd', v)}>
            确认密码
          </InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
          onChange={() => this.handleChange('type', 'genius')}
          checked={this.state.type === 'genius'}>
            牛人
          </RadioItem>
          <RadioItem
          onChange={() => this.handleChange('type', 'boss')}
          checked={this.state.type === 'boss'}>
            Boss
          </RadioItem>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}
export default Register