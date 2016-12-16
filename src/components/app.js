import React, { Component } from 'react'
import VisibleTodos from '../containers/visible-todos'
import AddTodo from '../containers/add-todo'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <div>
          <AddTodo />
          <VisibleTodos />
        </div>
      </div>
    );
  }
}
