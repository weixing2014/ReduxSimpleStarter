import {handleActions} from 'redux-actions'
import * as types from '../actions/action-types'

const todos = handleActions({
  [types.ADD_TODO]: (state, {payload: {text}}) => {
    return [
      ...state,
      {
        id: state.length === 0 ? 0 : state[state.length - 1].id + 1,
        text,
        completed: false,
      }
    ]
  },

  [types.DELETE_TODO]: (state, {payload: {id}}) => {
    return state.filter(todo => todo.id !== id)
  },

  [types.TOGGLE_TODO]: (state, {payload: {id, completed}}) => {
    return state.map(todo => {
      if (todo.id === id) {
        todo.completed = (typeof completed === 'undefined' ? !todo.completed : completed)
      }
      return todo
    })
  }

}, [])

export default todos
