import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import {Redirect} from 'react-router-dom'
// 两个reducers 每个reducers都有一个state
@connect( 
  state => state.auth,
  {login}
)
// 合并reducers
class Auth extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.isAuth? <Redirect to="/dashboard"></Redirect> :null }
        <h2>你没有权限，需要登陆才能看</h2>
        <button onClick={this.props.login}>登陆</button>
      </div>
    )
  }
}
export default Auth