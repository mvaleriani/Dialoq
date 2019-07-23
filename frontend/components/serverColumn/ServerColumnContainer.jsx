import { connect } from 'react-redux';
import React from 'react';
import ServerColumn from './ServerColumn';
import {fetchServerMembers, fetchUserServers, createServer, removeServerMembership} from '../../actions/serverActions';
import {fetchServerRooms, fetchPMRooms, clearRooms, clearMessages, fetchRoomMessages} from '../../actions/roomActions';
import {changeServer} from '../../actions/uiActions'
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.keys(state.servers).map(id => state.servers[id]),
    
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserServers: () => dispatch(fetchUserServers()),
  fetchServerRooms: serverId => dispatch(fetchServerRooms(serverId)),
  fetchPMRooms: () => dispatch(fetchPMRooms()),
  fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId)),
  createServer: server => dispatch(createServer(server)),
  removeServerMembership: serverId => dispatch(removeServerMembership(serverId)),
  clearRooms: emptyRooms => dispatch(clearRooms(emptyRooms)),
  clearMessages: emptyMessages => dispatch(clearMessages(emptyMessages)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerColumn));
