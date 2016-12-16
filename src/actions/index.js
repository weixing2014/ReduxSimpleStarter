import {createActions} from 'redux-actions'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY} from './action_types'

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  setVisibility
} = createActions({
  ADD_TODO: text => ({text}),
  DELETE_TODO: id => ({id}),
  TOGGLE_TODO: id => ({id}),
}, SET_VISIBILITY)
