import React from 'react';
import ToDoForm from './todo_form';
import TodoListItem from './todo_list_item';

class ToDoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {

    const { todos, deleteTodo, createTodo, errors } = this.props;

    return (
      <div>
        <ul>
          {todos.map( (el, i) => (
            <TodoListItem
              todo={el}
              key={i}
              deleteTodo={this.props.deleteTodo} />
          ))}
        </ul>

        <ToDoForm createTodo={ createTodo } errors={ errors } />
      </div>
    );
  }
}

export default ToDoList;
