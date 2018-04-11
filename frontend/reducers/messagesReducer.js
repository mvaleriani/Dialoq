import merge from 'lodash/merge';

import { RECEIVE_ROOM_MESSAGES } from '../actions/roomActions'

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROOM_MESSAGES:
      return merge({}, action.messages);
    default:
      return oldState;
  }
};

export default messagesReducer;
