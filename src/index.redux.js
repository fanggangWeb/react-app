// import { createStore } from 'redux'
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// reducer
export function counter (state,action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}
// action creater
export function addGUN () {
  return {type:ADD_GUN}
}
export function removeGUN () {
  return {type:REMOVE_GUN}
}
export function addGunAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN())
    }, 2000)
  }
}
