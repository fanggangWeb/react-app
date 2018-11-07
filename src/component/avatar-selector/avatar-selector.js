import React from 'react'
import { NavBar, Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
  constructor (props) {
    super (props)
    this.state = {}
  }
  render () {
    const avatatList = ['boy','woman','man','girl','bull','chick','crab','hedgehog','hippopotamus','koala','lemur','pig','tiger','whale','zebra']
    // .split(',')
    .map(v=> ({
      icon: require(`../img/${v}.png`),
      text: v
    }))
    const gridHeader = this.state.text ? (<div>
                                            <span>已选择头像</span>
                                            <img style={{width:20}} src={this.state.icon} alt=""/>
                                          </div>)
                                        : <div>请选择头像</div>
    return (<div>
      {/* {gridHeader} */}
      <List renderHeader={()=>gridHeader}>
        <Grid data={avatatList} 
          columnNum="5"
          onClick={ele => {
            this.setState(ele)
            this.props.selectAvatar(ele.text)
          }}
          activeStyle={false}>
        </Grid>
      </List>
    </div>)
  }
}
export default AvatarSelector
