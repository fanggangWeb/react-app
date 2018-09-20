import React from 'react';
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync } from './index.redux'

@connect(
  state=> ({num: state.counter}),
 {addGUN, removeGUN, addGunAsync})
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>现在有机枪{this.props.num}把</h1>
				<button onClick={this.props.addGUN}>申请武器</button>
				<button onClick={this.props.removeGUN}>上交武器</button>
				<button onClick={this.props.addGunAsync}>拖两天再交</button>
			</div>
		)
	}
}
export default App;
