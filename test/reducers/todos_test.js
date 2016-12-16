import reducer from '../../src/reducers/todos'
import * as types from '../../src/actions/action_types'

describe('todos reducer', () => {
  it('adds a todo', () => {
    const action = {type: types.ADD_TODO, payload: {text: 'text'}}
    const initalState = []
    const nextState = [{completed: false, id: 0, text: 'text'}]

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })

  it('deletes a todo', () => {
    const action = {type: types.DELETE_TODO, payload: {id: 1}}
    const initalState = [{completed: false, id: 1, text: 'text'}]
    const nextState = []

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })
})
