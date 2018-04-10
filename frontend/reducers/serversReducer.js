import merge from 'lodash/merge';

import { RECEIVE_USER_SERVERS,
         RECEIVE_SINGLE_SERVER,
         LEAVE_SERVER } from '../actions/serverActions'

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_SERVERS:
      return merge({}, action.servers);
    case RECEIVE_SINGLE_SERVER:
      return merge({}, oldState, {[action.server.id]: action.server});
    case LEAVE_SERVER:
      let newState = merge({}, oldState);
      delete newState[action.serverId];
      return newState;
    default:
      return oldState;
  }
};

export default serversReducer;
