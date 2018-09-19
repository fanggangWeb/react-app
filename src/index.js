import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { counter, addGUN, removeGUN, addGunAsync } from './index.redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import reducers from './reducer'
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

class Test extends React.Component{
  constructor (props) {
    super(props)
  }
  render() {
    console.log(this.props)
    // this.props.history.push('/')
    return <h2>测试组件 {this.props.match.params.location}</h2>
  }
}
// 登录
//   没有登陆信息 统一跳转login
// 页面

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* 只渲染命中的第一个Route */}
        <Route path="/login"  component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),
	document.getElementById('root')
)

 

