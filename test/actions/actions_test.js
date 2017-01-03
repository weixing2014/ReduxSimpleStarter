import * as actions from '../../src/actions'
import * as actionTypes from '../../src/constant/action-types'

describe('Actions', () => {
  it('fetchTodosRequested', () => {
    expect(actions.fetchTodosRequested()).to.deep.eql({ type: actionTypes.FETCH_TODOS_REQUESTED })
  })

  it('fetchTodosSuccess', () => {
    expect(actions.fetchTodosSuccess([
      {
        id: 0,
        text: 'todo',
        completed: false
      }
    ])).to.deep.eql({
      type: "FETCH_TODOS_SUCCESS",
      payload: {
        todos: [
          {
            id: 0,
            text: 'todo',
            completed: false
          }
        ]
      }
    })
  })
})
