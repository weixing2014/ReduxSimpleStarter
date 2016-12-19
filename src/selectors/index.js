import {createSelector} from 'reselect'
import {VISIBILITY_ALL, VISIBILITY_ACTIVE, VISIBILITY_COMPLETED} from '../constant'

const getVisibility = state => state.visibility
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibility, getTodos],
  (visibility, todos) => {
    switch (visibility) {
      case VISIBILITY_ALL:
        return todos
      case VISIBILITY_ACTIVE:
        return todos.filter(t => t.completed)
      case VISIBILITY_COMPLETED:
        return todos.filter(t => !t.completed)
    }
  }
)
