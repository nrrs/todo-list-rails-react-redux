import { connect } from 'react-redux';
import ToDoList from './todo_list';

import {
  createTodo,
  deleteTodo,
  fetchTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  requestTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
