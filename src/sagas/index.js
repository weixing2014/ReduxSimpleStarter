import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { fetchAllTodos } from '../api'
import * as actionTypes from '../actions/action-types'

function *fetchTodos(action) {
  try {
    const todos = yield call(fetchAllTodos)
    debugger;
    yield put({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: { todos }})
  } catch (e) {
    yield put({ type: actionTypes.FETCH_TODOS_FAILURE, error: e.error})
  }
}

function *watchFetchTodos() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodos)
}

export default function* watchMany() {
  yield [
    fork(watchFetchTodos)
  ]
}
