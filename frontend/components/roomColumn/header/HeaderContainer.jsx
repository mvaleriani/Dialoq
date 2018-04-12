import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import {withRouter} from 'react-router';
import { createRoom } from '../../../actions/roomActions';

const mapStateToProps = (state, ownProps) => {
  let serverName = 'Private Messages'
  if (state.servers[ownProps.match.params.serverId]) {
    serverName = state.servers[ownProps.match.params.serverId].name
  }
  return {serverName: serverName, currentUser: state.session.currentUser}
};

const mapDispatchToProps = dispatch => ({
  createRoom: room => dispatch(createRoom(room)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
