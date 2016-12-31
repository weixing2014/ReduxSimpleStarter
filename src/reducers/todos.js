import {handleActions} from 'redux-actions'
import * as types from '../actions/action-types'

const todos = handleActions({
  [types.ADD_TODO_SUCCESS]: (state, {payload: {id, text}}) => {
    return [
      ...state,
      {
        id,
        text,
        completed: false,
      }
    ]
  },

  [types.DELETE_TODO_SUCCESS]: (state, {payload: {id}}) => {
    return state.filter(todo => todo.id !== id)
  },

  [types.DELETE_TODO_FAILURE]: (state) => (state),

  [types.TOGGLE_TODO]: (state, {payload: {id, completed}}) => {
    return state.map(todo => {
      if (todo.id === id) {
        todo.completed = (typeof completed === 'undefined' ? !todo.completed : completed)
      }
      return todo
    })
  },

  [types.UPDATE_TODO]: (state, {payload: {id, text}}) => {
    return state.map(todo => {
      if (todo.id === id) todo.text = text || ''
      return todo
    })
  },

  [types.ADD_TODO_FAILURE]: (state, {payload: {id, error}}) => {
    return state.filter(todo => todo.id !== id)
  },

  [types.FETCH_TODOS_SUCCESS]: (state, {payload: {todos}}) => {
    return [
      ...state,
      ...todos.map(todo => ({
        id: todo.id,
        completed: todo.completed,
        text: todo.title
      }))
    ]
  }
}, [])

export default todos
