import { combineReducers } from 'redux';
import todosReducer from './todo_reducer';
import errorsReducer from './error_reducer';

const RootReducer = combineReducers({
  todos: todosReducer,
  errors: errorsReducer
});

export default RootReducer;
