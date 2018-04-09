import {
  RECEIVE_SERVER_ERRORS,
  RECEIVE_SINGLE_SERVER,
} from '../actions/serverActions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_SINGLE_SERVER:
      return [];
    default:
      return state;
  }
};
