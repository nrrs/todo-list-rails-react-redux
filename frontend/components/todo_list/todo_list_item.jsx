import React from 'react';

class TodoListItem extends React.Component {
  render() {
    const { todo, deleteTodo } = this.props;

    return (
      <li>
        {todo.title} {todo.body}
        <button onClick={ () => deleteTodo(todo) } >Delete</button>
      </li>

    );
  }
}

export default TodoListItem;
