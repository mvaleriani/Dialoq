import merge from 'lodash/merge';

import { RECEIVE_SERVER_MEMBERS } from '../actions/serverActions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SERVER_MEMBERS:
      return merge({}, action.users);
    default:
      return oldState;
  }
};

export default usersReducer;
