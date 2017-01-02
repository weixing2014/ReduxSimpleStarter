import {getVisibleTodos} from '../../src/selectors'
import * as todoFilters from '../../src/constant/todo-filters'
describe('selectors', () => {
  describe('should return visible todos', () => {
    it('should return all todos', () => {
      expect(getVisibleTodos({
        todos: [
          {id: 1, text: 'a', completed: true},
          {id: 2, text: 'b', completed: false},
        ],
        visibility: todoFilters.VISIBILITY_ALL
      })).to.deep.equal([
        {id: 1, text: 'a', completed: true},
        {id: 2, text: 'b', completed: false},
      ])
    })

    it('should return active todos', () => {
      expect(getVisibleTodos({
        todos: [
          {id: 1, text: 'a', completed: true},
          {id: 2, text: 'b', completed: false},
        ],
        visibility: todoFilters.VISIBILITY_ACTIVE
      })).to.deep.equal([
        {id: 1, text: 'a', completed: true},
      ])
    })

    it('should return completed todos', () => {
      expect(getVisibleTodos({
        todos: [
          {id: 1, text: 'a', completed: true},
          {id: 2, text: 'b', completed: false},
        ],
        visibility: todoFilters.VISIBILITY_COMPLETED
      })).to.deep.equal([
        {id: 2, text: 'b', completed: false},
      ])
    })
  })
})
