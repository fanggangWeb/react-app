import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Axios from 'axios'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import imoocForm from '../../component/imooc-form/imooc-form'


// function hello () {
//   console.log('hello')
// }
// function changeHello (fn) {
//   return function () {
//     console.log('before hello')
//     fn()
//     console.log('after hello')
//   }
// }
// 装饰器模式
// hello = changeHello(hello)
// hello()

// 属性代理
// function WrapperHello (Comp) {
//   // 反向继承
//   class WrapComp extends Comp {
//     componentDidMount () {
//       console.log('高阶组件新增的生命周期，加载完成')
//     }
//     render () {
//       return (
//         <div>
//           <Comp></Comp>
//         </div>
//       )
//     }
  // }
  // class WrapComp extends React.Component {
  //   render () {
  //     return (
  //       <div>
  //         <p>这是HOC高阶组件特有的元素</p>
  //         <Comp name='text' {...this.props}></Comp>
  //       </div>
  //     )
  //   }
  // }
//   return WrapComp
// }
// @WrapperHello
// class Hello extends React.Component{
//   render () {
//     return (
//       <h2>hello world</h2>
//     )
//   }
// }
@connect(
  state=> state.user,
  {login}
)



// Hello = WrapperHello(Hello)
@imoocForm
class Login extends React.Component{
  constructor (props) {
    super(props)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register () {
    console.log(this.props)
    this.props.history.push('/register')
  }
  handleLogin () {
    this.props.login(this.props.state)
  }
  render () {
    return (
      <div>
        {/* <Hello></Hello> */}
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <WingBlank>
        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <List>
            <InputItem onChange={v=>this.props.handleChange('user', v)}>用户</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem type="password" onChange={v=>this.props.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.handleLogin} type="primary">登陆</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login
