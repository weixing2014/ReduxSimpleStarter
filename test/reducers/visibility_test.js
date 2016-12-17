import reducer from '../../src/reducers/visibility'
import * as types from '../../src/actions/action-types'
import {VISIBILITY_ALL, VISIBILITY_ACTIVE, VISIBILITY_COMPLETED} from '../../src/constant'

describe('visibility reducer', () => {
  it('sets visibility filter', () => {
    const action = {type: types.SET_VISIBILITY, payload: {filter: VISIBILITY_ACTIVE}}
    const initalState = {}
    const nextState = VISIBILITY_ACTIVE

    expect(reducer(initalState, action)).to.deep.equal(nextState)
  })
})
