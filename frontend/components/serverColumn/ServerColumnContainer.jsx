import { connect } from 'react-redux';
import React from 'react';
import ServerColumn from './ServerColumn';
import {fetchUserServers, createServer, removeServerMembership} from '../../actions/serverActions';
import {fetchServerRooms, fetchPMRooms} from '../../actions/roomActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {servers: Object.keys(state.servers).map(id => state.servers[id])}
};

const mapDispatchToProps = dispatch => ({
  fetchUserServers: () => dispatch(fetchUserServers()),
  fetchServerRooms: serverId => dispatch(fetchServerRooms(serverId)),
  fetchPMRooms: () => dispatch(fetchPMRooms()),
  createServer: server => dispatch(createServer(server)),
  removeServerMembership: serverId => dispatch(removeServerMembership(serverId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerColumn));
