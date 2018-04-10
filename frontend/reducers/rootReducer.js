import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './errorsReducer';
import servers from './serversReducer';
import rooms from './roomsReducer'
import serverMembers from './usersReducer'
// import ui from './uiReducer'

const rootReducer = combineReducers({
  session,
  errors,
  servers,
  rooms,
  serverMembers,
  
});

export default rootReducer;
