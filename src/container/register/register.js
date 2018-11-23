import React from 'react'
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'
@connect(
  state => state.user,
  {register}
)
@imoocForm
class Register extends React.Component{
  constructor (props) {
    super(props) // boss或者niuren
    // this.state = {
    //   user: '',
    //   pwd: '',
    //   repeatpwd: '',
    //   type: 'genius'
    // }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleRegister () {
    this.props.register(this.props.state)
    // console.log(this.state)
  }
  componentDidMount () {
    this.props.handleChange('type','genius')
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <List>
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <InputItem onChange={v=>this.props.handleChange('user', v)}>用户名</InputItem>
          <InputItem
            type="password"
            onChange={v=>this.props.handleChange('pwd', v)}>
            密码
          </InputItem>
          <InputItem
            type="password"
            onChange={v=>this.props.handleChange('repeatpwd', v)}>
            确认密码
          </InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
          onChange={() => this.props.handleChange('type', 'genius')}
          checked={this.props.state.type === 'genius'}>
            牛人
          </RadioItem>
          <RadioItem
          onChange={() => this.props.handleChange('type', 'boss')}
          checked={this.props.state.type === 'boss'}>
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