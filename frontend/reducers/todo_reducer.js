import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  receieveTodos,
  receieveTodo,
  REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

// const todosReducer = (state = initialState, action) => {
//   Object.freeze(state);
//
//   let nextState = {};
//
//   switch(action.type) {
//     case RECEIVE_TODOS:
//       action.todos.forEach( todo => {
//         nextState[todo.id] = todo;
//       });
//       return nextState;
//     case RECEIVE_TODO:
//       const newTodo = {[action.todo.id]: action.todo};
//       return merge({}, state, newTodo);
//     case REMOVE_TODO:
//       nextState = merge({}, state);
//       delete nextState[action.todo.id];
//       return nextState;
//     default:
//       return state;
//   }
// };

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = {};

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (el) => {
        newState[el.id] = el;
      });
      return newState;

    case RECEIVE_TODO:
      Object.assign(newState, state);
      newState[action.todo.id] = action.todo;
      return newState;

    case REMOVE_TODO:
      Object.assign(newState, state);
      delete newState[action.todo.id];
      return newState;

    default:
      return state;
  }
};


export default todosReducer;
