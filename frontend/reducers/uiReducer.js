import { combineReducers } from 'redux';

import filters from './filtersReducer';
import modal from './modalReducer';

export default combineReducers({
  filters,
  modal
});
