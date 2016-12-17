import React, { Component } from 'react'
import VisibleTodos from '../containers/visible-todos'
import AddTodo from '../containers/add-todo'
import Footer from '../containers/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <div>
          <AddTodo />
          <VisibleTodos />
          <Footer />
        </div>
      </div>
    );
  }
}
