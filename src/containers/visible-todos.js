import {connect} from 'react-redux'
import Todos from '../components/todos'
import {toggleTodo, deleteTodo, updateTodo} from '../actions'
import {VISIBILITY_ALL, VISIBILITY_ACTIVE, VISIBILITY_COMPLETED} from '../constant'

const visibleTodos = (todos, filter) => {
  let visibleTodos

  switch(filter) {
    case VISIBILITY_ALL:
      visibleTodos = todos
      break
    case VISIBILITY_ACTIVE:
      visibleTodos = todos.filter(todo => !todo.completed)
      break
    case VISIBILITY_COMPLETED:
      visibleTodos = todos.filter(todo => todo.completed)
      break
    default:
      visibleTodos = todos
  }

  return visibleTodos
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckboxChange: id => dispatch(toggleTodo(id)),
    onDelete: id => dispatch(deleteTodo(id)),
    onSubmit: (id, text) => dispatch(updateTodo(id, text))
  }
}

const mapStateToProps = state => {
  return {
    todos: visibleTodos(state.todos, state.visibility)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
