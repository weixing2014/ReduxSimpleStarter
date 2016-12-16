import React, {Component} from 'react'
import Todo from './../components/todo'

class Todos extends Component {
  render() {
    this.todos.map((todo) => (
      <Todo key={todo.id}
            onCheckboxChange={() => {console.log('onCheckboxChange called ', todo.id)}}
            onTextClick={() => {console.log('onTextClick called', todo.id)}}
            checked={todo.completed}
            label={todo.text}/>
    ));
  }
}
