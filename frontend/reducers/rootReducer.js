import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './errorsReducer';
import servers from './serversReducer';
const rootReducer = combineReducers({
  session,
  errors,
  servers,
});

export default rootReducer;
