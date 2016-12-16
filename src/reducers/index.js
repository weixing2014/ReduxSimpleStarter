import { combineReducers } from 'redux';

// {
//   todos: [
//     {id: 1, text: 'Hello, World!', completed: false},
//     {id: 2, text: 'Nolan', completed: true},
//   ],
//   visibility: 'active' or 'completed' or 'all'
// }

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
