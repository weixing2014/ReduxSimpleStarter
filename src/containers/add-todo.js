import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodoRequested} from '../actions'

class addTodoRequested extends Component {
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
            this.props.dispatch(addTodoRequested(text))
            todoTextInput.value = ''
          }
        }}>
          <input ref='todoText' />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default connect()(addTodoRequested)
