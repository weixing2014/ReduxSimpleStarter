import {connect} from 'react-redux'
import Todos from '../components/todos'
import {toggleTodo, deleteTodo, updateTodo} from '../actions'
import {getVisibleTodos} from '../selectors'

const mapDispatchToProps = dispatch => {
  return {
    onCheckboxChange: id => dispatch(toggleTodo(id)),
    onDelete: id => dispatch(deleteTodo(id)),
    onSubmit: (id, text) => dispatch(updateTodo(id, text))
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
