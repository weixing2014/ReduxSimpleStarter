import { handleActions } from 'redux-actions'
import * as actionTypes from '../constant/action-types'
import * as todoFilters from '../constant/todo-filters'

const visibility = handleActions({
  [actionTypes.SET_VISIBILITY]: (state, {payload: { filter }}) => filter
}, todoFilters.VISIBILITY_ALL)

export default visibility
