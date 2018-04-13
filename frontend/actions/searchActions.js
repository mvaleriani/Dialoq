import * as APIUtil from '../util/searchAPIUtil';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = search_results => ({
  type: RECEIVE_SEARCH_RESULTS,
  search_results
});

export const fetchSearchResults = search => dispatch =>{
  APIUtil.fetchSearchResults(search)
    .then(searchResults => dispatch(receiveSearchResults(searchResults)));
};
