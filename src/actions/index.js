import {createActions} from 'redux-actions'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_VISIBILITY} from './action-types'

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  setVisibility,
  updateTodo
} = createActions({
  ADD_TODO: text => ({text}),
  DELETE_TODO: id => ({id}),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter})
})
