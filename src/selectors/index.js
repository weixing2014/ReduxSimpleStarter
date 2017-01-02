import {createSelector} from 'reselect'
import * as todoFilters from '../constant/todo-filters.js'

const getVisibility = state => state.visibility
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibility, getTodos],
  (visibility, todos) => {
    switch (visibility) {
      case todoFilters.VISIBILITY_ALL:
        return todos
      case todoFilters.VISIBILITY_ACTIVE:
        return todos.filter(t => t.completed)
      case todoFilters.VISIBILITY_COMPLETED:
        return todos.filter(t => !t.completed)
    }
  }
)
