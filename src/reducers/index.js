import { combineReducers } from 'redux'
import todos from './todos'
import visibility from './visibility'

// {
//   todos: [
//     {id: 1, text: 'Hello, World!', completed: false},
//     {id: 2, text: 'Nolan', completed: true},
//   ],
//   visibility: 'active' or 'completed' or 'all'
// }

const rootReducer = combineReducers({todos, visibility})

export default rootReducer;
