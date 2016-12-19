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
        <label>
          <input type='checkbox'
                 onChange={() => this._handleCheckboxChange()}
                 checked={this.state.checked}
                 />
          <span style={{textDecoration: this.state.checked ? 'line-through': 'none'}}>
            {this.props.label}
          </span>
        </label>
        {' '}
        <span className='tools'>
          <a href='#'
             className='tools__delete'
             onClick={(e) => {
               e.preventDefault()
               this.props.onDelete()
             }}
             >
            Del
          </a>
          {' '}
          <a href='#' className='tools__edit'>Edit</a>
        </span>
      </div>
    )
  }
}

export default Todo
