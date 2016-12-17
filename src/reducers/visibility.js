import {handleActions} from 'redux-actions'
import * as types from '../actions/action-types'

const visibility = handleActions({
  [types.SET_VISIBILITY]: (state, {payload: {filter}}) => filter
}, 'all')

export default visibility
