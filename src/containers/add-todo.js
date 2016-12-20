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

          const todoText = this.refs.todoText
          this.props.dispatch(addTodoOptimistic(todoText.value))
          todoText.value = ''
        }}>
          <input ref='todoText' />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
