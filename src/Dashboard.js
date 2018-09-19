import React from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App';
import { logout } from './Auth.redux'
function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}
@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>一营</Link>
          </li>
          <li>
            <Link to='/dashboard/erying'>二营</Link>
          </li>
          <li>
            <Link to='/dashboard/qibinglian'>骑兵连</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/erying' component={Erying}></Route>
        <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
      </div>
    )
  }
}
export default Dashboard