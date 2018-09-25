import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import { TOGGLE_MEMBER_INDEX } from '../actions/uiActions';
import modal from './modalReducer';

const components = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case TOGGLE_MEMBER_INDEX:
      return merge({}, {memberIndex: action.memberIndex});
    default:
      return oldState;
  }
};

export default combineReducers({
  modal, components
});
