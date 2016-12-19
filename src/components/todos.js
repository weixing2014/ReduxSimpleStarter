import React, {Component} from 'react'
import Todo from './../components/todo'

class Todos extends Component {
  render() {
    const {todos, onCheckboxChange} = this.props;

    return (
      <div className="todos">
        {
          todos.map(
            todo => {
              const {id, text, completed} = todo

              return <Todo key={id}
                           onCheckboxChange={() => onCheckboxChange(id)}
                           checked={completed}
                           label={text} />
            }
          )
        }
      </div>
    )
  }
}

export default Todos;