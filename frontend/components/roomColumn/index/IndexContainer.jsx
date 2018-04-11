import { connect } from 'react-redux';
import React from 'react';
import Index from './Index';
import {withRouter} from 'react-router'
import {fetchRoomMessages} from '../../../actions/roomActions'
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  return {rooms: Object.values(state.rooms), messages: state.messages};
};

const mapDispatchToProps = dispatch => ({
  fetchRoomMessages: roomId => dispatch(fetchRoomMessages(roomId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));
