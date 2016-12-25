import {createActions} from 'redux-actions'
import uuidV4 from 'uuid/v4'
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
  ADD_TODO: (id, text) => ({id, text}),
  ADD_TODO_SUCCESS: (id, response) => ({response}),
  ADD_TODO_FAILURE: (id, error) => ({id, error}),
  DELETE_TODO: id => ({id}),
  TOGGLE_TODO: (id, completed) => ({id, completed}),
  UPDATE_TODO: (id, text) => ({id, text}),
  SET_VISIBILITY: filter => ({filter})
})

export function addTodoOptimistic(text) {
  return function(dispatch) {
    const id = uuidV4()
    dispatch(addTodo(id, text))

    fetch('/add_todo', {
      method: 'post',
      body: JSON.stringify({text})
    }).then(response => {
      const {statusText, status} = response

      if (status >= 200 && status < 300) {
        dispatch(addTodoSuccess(response))
      } else {
        dispatch(addTodoFailure(id, statusText))
      }
    }).catch(err => {
      dispatch(addTodoFailure(id, err))
    })

    return null
  }
}
