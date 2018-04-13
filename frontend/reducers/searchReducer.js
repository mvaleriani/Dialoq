import merge from 'lodash/merge';

import { RECEIVE_SEARCH_RESULTS } from '../actions/searchActions'


const searchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.search_results);
    default:
      return oldState;
  }
};

export default searchReducer;
