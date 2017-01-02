import {createActions} from 'redux-actions'
import uuidV4 from 'uuid/v4'
import {FETCH_TODOS, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_VISIBILITY} from '../constant/action-types'
import * as api from '../api'

export const {
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodo,
  addTodoSuccess,
  addTodoFailure,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodo,
  updateTodo,
  setVisibility,
} = createActions({
  FETCH_TODOS: () => ({}),
  FETCH_TODOS_SUCCESS: ({ todos }) => ({ todos }),
  FETCH_TODOS_FAILURE: ({ error }) => ({ error }),
  ADD_TODO: (text) => ({ text }),
  ADD_TODO_SUCCESS: ({id, text}) => ({ id, text }),
  ADD_TODO_FAILURE: (error) => ({ error }),
  DELETE_TODO: id => ({id}),
  DELETE_TODO_SUCCESS: (id) => ({id}),
  DELETE_TODO_FAILURE: (error) => ({ error }),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter}),
})
