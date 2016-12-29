import {createActions} from 'redux-actions'
import uuidV4 from 'uuid/v4'
import {FETCH_TODOS, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_VISIBILITY} from './action-types'
import * as api from '../api'

export const {
  fetchTodos,
  addTodo,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodo,
  setVisibility,
  updateTodo,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
} = createActions({
  FETCH_TODOS: () => {debugger; return {}},
  ADD_TODO: ({id, text}) => ({id, text}),
  ADD_TODO_SUCCESS: ({id, serverId}) => ({id, serverId}),
  ADD_TODO_FAILURE: ({id, error}) => ({id, error}),
  DELETE_TODO_START: id => ({id}),
  DELETE_TODO_SUCCESS: () => ({}),
  DELETE_TODO_FAILURE: ({order, todo}) => ({order, todo}),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter}),
  FETCH_TODOS_START: () => ({}),
  FETCH_TODOS_SUCCESS: ({todos}) => ({todos}),
  FETCH_TODOS_FAILURE: ({error}) => ({error}),
})

// export function fetchTodos() {
//   return function(dispatch) {
//     dispatch(fetchTodosStart())
//
//     api.fetchTodos({
//       onSuccess: data => dispatch(fetchTodosSuccess({ todos: data })),
//       onFailure: error => dispatch(fetchTodosFailure({ error }))
//     })
//
//     return null
//   }
// }

export function deleteTodo(id) {
  return function(dispatch, getState) {
    const order = getState().todos.findIndex(todo => (todo.id === id))
    const todo = getState().todos[order]

    dispatch(deleteTodoStart(id))

    api.deleteTodo({
      id,
      onSuccess: () => dispatch(deleteTodoSuccess()),
      onFailure: () => dispatch(deleteTodoFailure({ order, todo }))
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
