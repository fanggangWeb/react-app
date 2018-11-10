import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
function Boss () {
  return <h2>Boss首页</h2>
}
@connect (
  state => state
)
class Dashboard extends React.Component{
  render () {
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: 
      }
    ]
    return (
      <div>
        <h2>header</h2>
        <h2>footer</h2>
      </div>
    )
  }
}
export default Dashboard