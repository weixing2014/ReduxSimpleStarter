import {addTodo, deleteTodo, toggleTodo} from '../../src/actions/index'

describe('Actions', () => {
  it('adds a new todo', () => {
    expect(addTodo({text: 'todo'})).to.deep.eql({
      type: "ADD_TODO",
      payload: {
        text: "todo"
      }
    })
  })

  it('removes a todo', () => {
    expect(deleteTodo({id: 1})).to.deep.eql({
      type: "DELETE_TODO",
      payload: {
        id: 1
      }
    })
  })

  it('marks a todo completed', () => {
    expect(toggleTodo({id: 1, completed: true})).to.deep.eql({
      type: "TOGGLE_TODO",
      payload: {
        id: 1,
        completed: true,
      }
    })
  })

  //todo: more action tests
})
