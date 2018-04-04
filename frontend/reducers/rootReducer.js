import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './errorsReducer';
const rootReducer = combineReducers({
  session,
  errors
});

export default rootReducer;
