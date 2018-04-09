import { connect } from 'react-redux';
import React from 'react';
import ServerColumn from './ServerColumn';
import {fetchUserServers, createServer, removeServerMembership} from '../../actions/serverActions';

const mapStateToProps = (state, ownProps) => ({
  servers: Object.keys(state.servers).map(id => state.servers[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUserServers: () => dispatch(fetchUserServers()),
  createServer: server => dispatch(createServer(server)),
  removeServerMembership: serverId => dispatch(removeServerMembership(serverId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerColumn);
