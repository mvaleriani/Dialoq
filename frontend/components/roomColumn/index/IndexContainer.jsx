import { connect } from 'react-redux';
import React from 'react';
import Index from './Index';
import {withRouter} from 'react-router'
import {fetchRoomMessages, clearMessages} from '../../../actions/roomActions'
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  return {rooms: Object.values(state.rooms), messages: state.messages};
};

const mapDispatchToProps = dispatch => ({
  fetchRoomMessages: roomId => dispatch(fetchRoomMessages(roomId)),
  clearMessages: emptyMessages => dispatch(clearMessages(emptyMessages))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));
