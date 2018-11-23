import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import { withRouter } from  'react-router-dom'
@withRouter
class UserCard extends React.Component{
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  constructor (props) {
    super(props)
  }
  handleClick (v) {
    this.props.history.push(`/chat/${v.user}`)
  }
  render () {
    const userlist = this.props.data
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {userlist.map(v=>(
          v.avatar?(<Card
            style={{zIndex:1}}
            onClick={()=>this.handleClick(v)}
            key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}>
            </Card.Header>
            <Card.Body>
              {v.type=='boss'?(<div>公司：{v.company}</div>):null}
              {v.desc.split('\n').map(d=>(<p key={d}>{d}</p>))}
              {v.type=='boss'&&v.money!==''?(<div>薪资：{v.money}</div>):null}
            </Card.Body>
          </Card>):null
        ))}
      </WingBlank>
    )
  }
}
export default UserCard