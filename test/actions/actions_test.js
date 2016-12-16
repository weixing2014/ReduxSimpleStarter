import {addTodo, deleteTodo} from '../../src/actions/index'

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

  //todo: more action tests
})
