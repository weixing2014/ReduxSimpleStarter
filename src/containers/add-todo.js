import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()

          const todoText = this.refs.todoText
          this.props.dispatch(addTodo(todoText.value))
          todoText.value = ''
        }}>
          <input ref='todoText'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
