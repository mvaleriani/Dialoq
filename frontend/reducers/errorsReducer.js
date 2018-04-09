import { combineReducers } from 'redux';

import session from './sessionErrorsReducer';
import server from './serversErrorsReducer';

export default combineReducers({
  session,
  server,
});
