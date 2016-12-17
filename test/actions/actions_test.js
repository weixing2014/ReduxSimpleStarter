import {addTodo, deleteTodo, toggleTodo} from '../../src/actions/index'

describe('Actions', () => {
  it('adds a new todo', () => {
    expect(addTodo('todo')).to.deep.eql({
      type: "ADD_TODO",
      payload: {
        text: "todo"
      }
    })
  })

  it('removes a todo', () => {
    expect(deleteTodo(1)).to.deep.eql({
      type: "DELETE_TODO",
      payload: {
        id: 1
      }
    })
  })

  it('toggles a todo', () => {
    expect(toggleTodo(1)).to.deep.eql({
      type: "TOGGLE_TODO",
      payload: {
        id: 1
      }
    })
  })

  //todo: more action tests
})
