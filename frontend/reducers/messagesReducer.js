import merge from 'lodash/merge';

import { RECEIVE_ROOM_MESSAGES } from '../actions/roomActions'
import { RECEIVE_MESSAGE } from '../actions/messageActions'

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_ROOM_MESSAGES:
      return merge({}, action.messages);
    case RECEIVE_MESSAGE:
      let toMerge = {[action.message.id]: action.message};
      
      return merge({}, oldState, toMerge);
    default:
      return oldState;
  }
};

export default messagesReducer;
