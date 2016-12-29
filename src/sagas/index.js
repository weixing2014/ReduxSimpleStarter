import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from '../api'
import * as actionTypes from '../actions/action-types'

function *fetchTodos(action) {
  try {
    const todos = yield call(
      Api.fetchTodos, 
      '/fetch-todos',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: ''
      }
    )
    debugger;
    yield put({ type: actionTypes.FETCH_TODOS_SUCCESS, todos })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_TODOS_FAILURE, error: e.error})
  }
}

export default function *mySaga() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodos)
}
