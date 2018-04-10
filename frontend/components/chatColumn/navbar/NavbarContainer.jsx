import { connect } from 'react-redux';
import React from 'react';
import Navbar from './Navbar';
import {withRouter} from 'react-router';
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  let roomName = '';
  if (state.rooms[ownProps.match.params.roomId]) {
    roomName = state.rooms[ownProps.match.params.roomId].name
  }
  return { roomName };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
