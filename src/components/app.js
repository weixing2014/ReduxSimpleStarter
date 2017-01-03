import React, { Component } from 'react'
import VisibleTodos from '../containers/visible-todos'
import addTodoRequested from '../containers/add-todo'
import Footer from '../containers/footer'
import { fetchTodosRequested } from '../actions'
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
          <addTodoRequested />
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
      dispatch(fetchTodosRequested())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
