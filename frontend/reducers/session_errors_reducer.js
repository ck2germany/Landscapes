import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
