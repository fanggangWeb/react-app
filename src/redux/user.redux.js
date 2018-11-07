import axios from 'axios'
import { getRedirectPath } from '../util'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  type: ''
}
// reducer
export function user (state=initState, action) {
  switch (action.type) {
    case ERROR_MSG:
      return {...state, isAuth:false, msg:action.msg}
    case AUTH_SUCCESS:
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}
function authSuccess(obj) {
  const {pwd, ...data} = obj
  return {
    type:AUTH_SUCCESS,
    payload: data
  }
}
function errorMsg (msg) {
  return {
    type: ERROR_MSG,
    msg: msg
  }
}
export function userinfo () {
  // 获取用户信息
  return dispatch => {
    axios.get('/user/info').then(res => {
      if (res.status == 200) {
        if (res.data.code == 0) {
          // 有登陆信息的
        } else {
          this.props.history.push('/login')
        }
        console.log(res.data)
      }
    })
  }
  // 是否登陆
  // 现在的url地址 login是不需要跳转的
  // 用户的type 身份是boss还是牛人
  // 用户是否完善信息（选择头像 个人简介)
}
export function loadData (data) {
  return {
    type: LOAD_DATA,
    payload: data
  }
}
export function update (data) {
  return dispatch => {
    axios.post('/user/update',data).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        // dispatch(registerSuccess({user,pwd}))
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
export function login ({pwd,user}) {
  if (!pwd||!user) {
    return errorMsg('用户名密码必须输入')
  } else {
    return dispatch => {
      axios.post('/user/login',{user,pwd}).then(res => {
        if (res.status === 200 && res.data.code === 0) {
          // dispatch(registerSuccess({user,pwd}))
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
    }
  }
}
export function register ({user,pwd,repeatpwd,type}) {
  if (!user||!pwd||!type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd!==repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }
  return dispatch => {
    axios.post('/user/register',{user,pwd,type}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({user,pwd,type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}