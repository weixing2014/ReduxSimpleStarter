import {handleActions} from 'redux-actions'
import * as actionTypes from '../constant/action-types'

const todos = handleActions({
  [actionTypes.ADD_TODO_SUCCESS]: (state, { payload: { id, text } }) => {
    return [
      ...state,
      {
        id,
        text,
        completed: false,
      }
    ]
  },

  [actionTypes.DELETE_TODO_SUCCESS]: (state, { payload: { id } }) => {
    return state.filter(todo => todo.id !== id)
  },

  [actionTypes.DELETE_TODO_FAILURE]: (state) => (state),

  [actionTypes.TOGGLE_TODO]: (state, { payload: { id, completed } }) => {
    return state.map(todo => {
      if (todo.id === id) {
        todo.completed = (typeof completed === 'undefined' ? !todo.completed : completed)
      }
      return todo
    })
  },

  [actionTypes.UPDATE_TODO]: (state, {payload: {id, text}}) => {
    return state.map(todo => {
      if (todo.id === id) todo.text = text || ''
      return todo
    })
  },

  [actionTypes.ADD_TODO_FAILURE]: (state, {payload: {id, error}}) => {
    return state.filter(todo => todo.id !== id)
  },

  [actionTypes.FETCH_TODOS_SUCCESS]: (state, {payload: {todos}}) => {
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
