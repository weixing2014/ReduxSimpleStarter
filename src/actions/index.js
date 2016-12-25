import {createActions} from 'redux-actions'
import uuidV4 from 'uuid/v4'
import {ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_VISIBILITY} from './action-types'
import * as api from '../api'

export const {
  addTodo,
  addTodoSuccess,
  addTodoFailure,
  deleteTodo,
  toggleTodo,
  setVisibility,
  updateTodo,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure
} = createActions({
  ADD_TODO: ({id, text}) => ({id, text}),
  ADD_TODO_SUCCESS: ({id, serverId}) => ({id, serverId}),
  ADD_TODO_FAILURE: ({id, error}) => ({id, error}),
  DELETE_TODO: id => ({id}),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter}),
  FETCH_TODOS_START: () => ({}),
  FETCH_TODOS_SUCCESS: ({todos}) => ({todos}),
  FETCH_TODOS_FAILURE: ({error}) => ({error})
})

export function fetchTodos() {
  return function(dispatch) {
    dispatch(fetchTodosStart())

    api.fetchTodos({
      onSuccess: data => dispatch(fetchTodosSuccess({ todos: data })),
      onFailure: error => dispatch(fetchTodosFailure({ error }))
    })

    return null
  }
}

export function addTodoOptimistic(text) {
  return function(dispatch) {
    const id = uuidV4()
    dispatch(addTodo({id, text}))

    api.addTodo({
      body: JSON.stringify({ title: text, order: 0, completed: false }),
      onSuccess: (data) => { dispatch(addTodoSuccess({id, serverId: data.id})) },
      onFailure: (error) => { dispatch(addTodoFailure({id, error: err})) }
    })

    return null
  }
}
