import { connect } from 'react-redux';
import React from 'react';
import Navbar from './Navbar';
import {withRouter} from 'react-router';
import { fetchSearchResults } from '../../../actions/searchActions';
import { joinServer } from '../../../actions/serverActions';
import { addFriend } from '../../../actions/userActions';
import { openModal, closeModal } from '../../../actions/modalActions';
import { toggleMemberIndex } from '../../../actions/uiActions';

const mapStateToProps = (state, ownProps) => {
  let roomName = '';
  if (state.rooms[ownProps.match.params.roomId]) {
    roomName = state.rooms[ownProps.match.params.roomId].name
  }
  return { roomName, searchResults: state.searchResults, memberIndexState: state.ui.components.memberIndex };
};

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: search => dispatch(fetchSearchResults(search)),
  joinServer: server => dispatch(joinServer(server)),
  addFriend: user => dispatch(addFriend(user)),
  toggleMemberIndex: toggleBool => dispatch(toggleMemberIndex(toggleBool)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
