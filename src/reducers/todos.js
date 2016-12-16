import {handleActions} from 'redux-actions'
import {ADD_TODO, DELETE_TODO} from '../actions/action_types'

const initalState = []

const todos = handleActions({
  [ADD_TODO]: (state, {payload: {text}}) => {
    return [
      ...state,
      {
        id: state.length === 0 ? 0 : state[state.length - 1].id + 1,
        text,
        completed: false
      }
    ]
  },

  [DELETE_TODO]: (state, {payload: {id}}) => {
    return state.filter(todo => todo.id !== id)
  }
}, initalState)

export default todos
