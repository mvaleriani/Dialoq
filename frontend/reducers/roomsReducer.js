import merge from 'lodash/merge';

import { RECEIVE_SERVER_ROOMS,
         RECEIVE_SERVER_ROOM } from '../actions/roomActions'

const roomsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SERVER_ROOMS:
      return merge({}, action.rooms);
    case RECEIVE_SERVER_ROOM:
      return merge({}, oldState, {[action.room.id]: action.room});
    default:
      return oldState;
  }
};

export default roomsReducer;
