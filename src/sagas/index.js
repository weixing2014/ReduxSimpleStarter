import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import * as api from '../api'
import * as actionTypes from '../constant/action-types'
import * as actions from '../actions'

export function *fetchTodosRequested(action) {
  try {
    const todos = yield call(api.fetchTodosRequested)
    yield put(actions.fetchTodosSuccess(todos))
  } catch (e) {
    yield put(actions.fetchTodosFailure({ error: e.error }))
  }
}

export function *addTodoRequested(action) {
  try {
    const todo = yield call(api.addTodoRequested, { title: action.payload.text })
    yield put(actions.addTodoSuccess({ id: todo.id, text: todo.title }))
  } catch (e) {
    yield put(actions.addTodoFailure(e.error))
  }
}

export function *deleteTodoRequested(action) {
  try {
    yield call(api.deleteTodoRequested, action.payload.id)
    yield put(actions.deleteTodoSuccess(action.payload.id))
  } catch (e) {
    yield put(actions.deleteTodoFailure(e.error))
  }
}

export default function* watchMany() {
  yield [
    takeEvery(actionTypes.FETCH_TODOS_REQUESTED, fetchTodosRequested),
    takeEvery(actionTypes.ADD_TODO_REQUESTED, addTodoRequested),
    takeEvery(actionTypes.DELETE_TODO_REQUESTED, deleteTodoRequested),
  ]
}
