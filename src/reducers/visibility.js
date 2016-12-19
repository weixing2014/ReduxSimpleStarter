import {handleActions} from 'redux-actions'
import * as types from '../actions/action-types'
import {VISIBILITY_ALL} from '../constant'

const visibility = handleActions({
  [types.SET_VISIBILITY]: (state, {payload: {filter}}) => filter
}, VISIBILITY_ALL)

export default visibility
