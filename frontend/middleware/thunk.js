const thunk = ({ dispatch, getState }) => next => action => {
  // check the type of each incoming action and see if it is of type function
  if (typeof action === 'function') {
    // If so, return action(dispatch, getState)
    return action(dispatch, getState);
  }
  // If not, return next(action
  return next(action);
};

export default thunk;
