import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './errorsReducer';
import servers from './serversReducer';
import rooms from './roomsReducer'
const rootReducer = combineReducers({
  session,
  errors,
  servers,
  rooms,
});

export default rootReducer;
