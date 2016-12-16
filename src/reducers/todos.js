import {handleActions} from 'redux-actions'
import * as types from '../actions/action_types'

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

  [types.SET_TODO_COMPLETED]: (state, {payload: {id, completed}}) => {
    return state.map(todo => {
      if (todo.id === id) {
        todo.completed = (typeof completed === 'undefined' ? true : completed)
      }
      return todo
    })
  }

}, [])

export default todos
