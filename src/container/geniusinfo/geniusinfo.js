import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {update}
)
class GeniusInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: ''
    }
    // this.selectAvatar = this.selectAvatar.bind(this)
  }
  onChange(key,val) {
    this.setState({
      [key]: val
    })
  }
  selectAvatar(val) {
    this.setState({
      avatar: val
    })
  }
  render () {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (<div>
      {redirect&&path!=redirect?<Redirect to={this.props.redirectTo}></Redirect>:null}
      <NavBar mode="dark">牛人完善信息页</NavBar>
      <AvatarSelector
        selectAvatar={v=>this.selectAvatar(v)}>
      </AvatarSelector>
      <InputItem onChange={(v)=>this.onChange('title',v)}>
        求职岗位
      </InputItem>
      <TextareaItem title="个人简介" rows="3" autoHeight onChange={(v)=>this.onChange('desc',v)}>
      </TextareaItem>
      <Button
        onClick={()=>{
          this.props.update(this.state)
        }}
        type="primary">保存</Button>
    </div>)
  }
}
export default GeniusInfo
