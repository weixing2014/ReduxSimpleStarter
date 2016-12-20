import {createActions} from 'redux-actions'
import {ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_VISIBILITY} from './action-types'

export const {
  addTodo,
  addTodoSuccess,
  addTodoFailure,
  deleteTodo,
  toggleTodo,
  setVisibility,
  updateTodo
} = createActions({
  ADD_TODO: text => ({text}),
  ADD_TODO_SUCCESS: (id, response) => ({response}),
  ADD_TODO_FAILURE: (id, error) => ({error}),
  DELETE_TODO: id => ({id}),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter})
})

export function addTodoOptimistic(text) {
  return function(dispatch) {
    dispatch(addTodo(text))

    fetch('/add_todo', {
      method: 'post',
      body: JSON.stringify({text})
    }).then(response => {
      dispatch(addTodoSuccess(response))
    }).catch(err => {
      dispatch(addTodoFailure(err))
    })

    return null
  }
}
