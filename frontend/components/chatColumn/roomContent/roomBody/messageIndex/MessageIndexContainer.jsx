import { connect } from 'react-redux';
import React from 'react';
import MessageIndex from './MessageIndex';
import {withRouter} from 'react-router-dom';
import {fetchRoomMessages} from '../../../../../actions/roomActions'

const mapStateToProps = (state, ownProps) => {
  return {messages: Object.values(state.messages), serverMembers: state.serverMembers}
};

const mapDispatchToProps = dispatch => ({
  fetchRoomMessages: roomId => dispatch(fetchRoomMessages(roomId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex));
