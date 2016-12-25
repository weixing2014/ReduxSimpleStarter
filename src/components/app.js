import React, { Component } from 'react'
import VisibleTodos from '../containers/visible-todos'
import AddTodo from '../containers/add-todo'
import Footer from '../containers/footer'
import { fetchTodos } from '../actions'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.onFetchTodos()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTodos: () => {
      dispatch(fetchTodos())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
