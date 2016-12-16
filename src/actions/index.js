import {createActions} from 'redux-actions'
import {ADD_TODO, DELETE_TODO, SET_TODO_COMPLETED, SET_VISIBILITY} from './action_types'

export const {
  addTodo,
  deleteTodo,
  setTodoCompleted,
  setVisibility
} = createActions(
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_COMPLETED,
  SET_VISIBILITY
)
