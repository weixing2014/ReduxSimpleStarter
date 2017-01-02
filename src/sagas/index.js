import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import * as api from '../api'
import * as actionTypes from '../constant/action-types'
import * as actions from '../actions'

export function *fetchTodos(action) {
  try {
    const todos = yield call(api.fetchTodos)
    yield put(actions.fetchTodosSuccess({ todos }))
  } catch (e) {
    yield put(actions.fetchTodosFailure({ error: e.error }))
  }
}

export function *addTodo(action) {
  try {
    const todo = yield call(api.addTodo, { title: action.payload.text })
    yield put(actions.addTodoSuccess({ id: todo.id, text: todo.title }))
  } catch (e) {
    yield put(actions.addTodoFailure(e.error))
  }
}

export function *deleteTodo(action) {
  try {
    yield call(api.deleteTodo, action.payload.id)
    yield put(actions.deleteTodoSuccess(action.payload.id))
  } catch (e) {
    yield put(actions.deleteTodoFailure(e.error))
  }
}

export default function* watchMany() {
  yield [
    takeEvery(actionTypes.FETCH_TODOS, fetchTodos),
    takeEvery(actionTypes.ADD_TODO, addTodo),
    takeEvery(actionTypes.DELETE_TODO, deleteTodo),
  ]
}
