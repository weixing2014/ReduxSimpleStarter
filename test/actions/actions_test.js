import * as actions from '../../src/actions'
import * as actionTypes from '../../src/constant/action-types'

describe('Actions', () => {
  it('fetchTodos', () => {
    expect(actions.fetchTodos()).to.deep.eql({ type: actionTypes.FETCH_TODOS })
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
