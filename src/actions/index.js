import {createActions, createAction} from 'redux-actions'
import * as actionTypes from '../constant/action-types'

export const fetchTodosRequested = createAction(actionTypes.FETCH_TODOS_REQUESTED)

export const fetchTodosSuccess = createAction(actionTypes.FETCH_TODOS_SUCCESS, (todos) => ({ todos }))

export const fetchTodosFailure = createAction(actionTypes.FETCH_TODOS_FAILURE, ({ error }) => ({ error }))

export const addTodoRequested = createAction(actionTypes.ADD_TODO_REQUESTED, text => ({ text }))

export const addTodoSuccess = createAction(actionTypes.ADD_TODO_SUCCESS, ({ id, text }) => ({ id, text }))

export const addTodoFailure = createAction(actionTypes.ADD_TODO_FAILURE, error => ({ error }))

export const deleteTodoRequested = createAction(actionTypes.DELETE_TODO_REQUESTED, id => ({ id }))

export const deleteTodo = createAction(actionTypes.DELETE_TODO, id => ({ id }))

export const deleteTodoSuccess = createAction(actionTypes.DELETE_TODO_SUCCESS, id => ({ id }))

export const deleteTodoFailure = createAction(actionTypes.DELETE_TODO_FAILURE, error => ({ error }))

export const toggleTodo = createAction(actionTypes.TOGGLE_TODO, (id, completed) => ({ id, completed }))

export const updateTodo = createAction(actionTypes.UPDATE_TODO, (id, text) => ({ id, text }))

export const setVisibility = createAction(actionTypes.SET_VISIBILITY, filter => ({ filter }))
