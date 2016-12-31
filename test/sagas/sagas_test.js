import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../../src/actions/action-types'
import { fetchTodos } from '../../src/sagas'
import * as api from '../../src/api'

describe('sagas', () => {
  it('should fetch todos', () => {
    const action = {
      type: actionTypes.FETCH_TODOS,
    }

    const it = fetchTodos(action)

    expect(
      it.next().value
    ).to.be.eql(
      call(api.fetchTodos)
    )

    const mockTodos = [{ id: 1, title: 'ok', completed: false }]

    expect(it.next(mockTodos).value).to.be.eql(
      put({
        type: actionTypes.FETCH_TODOS_SUCCESS,
        payload: { todos: mockTodos }
      })
    )
  })
})
