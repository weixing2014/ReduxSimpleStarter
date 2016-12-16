import {connect} from 'react-redux'
import Todos from '../components/todos'
import {toggleTodo} from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onCheckboxChange: id => dispatch(toggleTodo({id}))
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
