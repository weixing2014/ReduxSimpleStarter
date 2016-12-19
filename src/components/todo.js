import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked,
      showTools: false,
      editing: false,
    }
  }

  componentDidUpdate() {
    this._setTodoTextInputFocus()
  }

  _setTodoTextInputFocus() {
    if (this.state.editing) {
      const input = this.refs.todoTextInput

      ReactDOM.findDOMNode(input).focus()
      input.value = ''
      input.value = this.props.label
    }
  }

  _handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked
    })
    this.props.onCheckboxChange()
  }

  _renderTextInput() {
    const {onSubmit, label} = this.props

    return (
      <div>
        <form onSubmit={e => {
                const textInput = this.refs.todoTextInput
                e.preventDefault()
                onSubmit(textInput.value)
                this.setState({editing: false})
              }}
              >
          <input ref='todoTextInput' defaultValue={label} />
          <input type='submit' value='Edit' />
        </form>
      </div>
    )
  }

  _renderText() {
    const {checked, showTools} = this.state
    const {label, onDelete} = this.props

    return (
      <div onMouseOut={() => this.setState({showTools: false})}
           onMouseOver={() => this.setState({showTools: true})}
           >
          <label>
            <input type='checkbox'
                   onChange={() => this._handleCheckboxChange()}
                   checked={checked}
                   />
            <span style={{textDecoration: checked ? 'line-through': 'none'}}>
              {label}
            </span>
          </label>
          {' '}
          <span className='tools' style={{display: showTools ? 'inline' : 'none'}}>
            <a href='#' className='tools__delete' onClick={e => {
              e.preventDefault()
              onDelete()
            }}>Del</a>
            {' '}
            <a href='#' className='tools__edit' onClick={e => {
              e.preventDefault()
              this.setState({editing: true})
            }}>Edit</a>
         </span>
       </div>
    )
  }

  render() {
    return this.state.editing ? this._renderTextInput() : this._renderText()
  }
}

export default Todo
