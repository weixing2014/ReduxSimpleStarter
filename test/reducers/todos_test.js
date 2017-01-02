import reducer from '../../src/reducers/todos'
import * as types from '../../src/constant/action-types'

describe('todos reducer', () => {
  it('adds a todo', () => {
    const action = {type: types.ADD_TODO_SUCCESS, payload: {id: 0, text: 'text'}}
    const initalState = []
    const nextState = [{completed: false, id: 0, text: 'text'}]

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })

  it('deletes a todo', () => {
    const action = {type: types.DELETE_TODO_SUCCESS, payload: {id: 1}}
    const initalState = [{completed: false, id: 1, text: 'text'}]
    const nextState = []

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })

  it('sets a todo completed', () => {
    const action = {type: types.TOGGLE_TODO, payload: {id: 1}}
    const initalState = [{completed: false, id: 1, text: 'text'}]
    const nextState = [{completed: true, id: 1, text: 'text'}]

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })

  it('sets a todo incompleted', () => {
    const action = {type: types.TOGGLE_TODO, payload: {id: 1, completed: false}}
    const initalState = [{completed: true, id: 1, text: 'text'}]
    const nextState = [{completed: false, id: 1, text: 'text'}]

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })
})
