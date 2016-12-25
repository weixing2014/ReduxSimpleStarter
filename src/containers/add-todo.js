import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodoOptimistic} from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          const todoTextInput = this.refs.todoText
          const text = todoTextInput.value.trim();
          
          if (text) {
            this.props.dispatch(addTodoOptimistic(text))
            todoTextInput.value = ''
          } else {
            return
          }
        }}>
          <input ref='todoText' />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
