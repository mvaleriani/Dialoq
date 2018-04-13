import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './errorsReducer';
import servers from './serversReducer';
import rooms from './roomsReducer';
import serverMembers from './usersReducer';
import messages from './messagesReducer'
import ui from './uiReducer'
import searchResults from './searchReducer'

const rootReducer = combineReducers({
  session,
  errors,
  servers,
  rooms,
  serverMembers,
  messages,
  ui,
  searchResults,
});

export default rootReducer;
