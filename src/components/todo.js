import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked
    }
  }

  _handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked
    })
    this.props.onCheckboxChange()
  }

  render() {
    return (
      <div>
        <input type='checkbox'
               onChange={() => this._handleCheckboxChange()}
               checked={this.state.checked} />
        <label onClick={() => this.props.onTextClick()}>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default Todo
