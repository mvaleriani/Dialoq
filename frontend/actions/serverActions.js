import * as APIUtil from '../util/serverAPIUtil';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SINGLE_SERVER = 'RECEIVE_SINGLE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
// export const CREATE_SERVER = 'CREATE_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

const receiveUserServers = servers => ({
  type: RECEIVE_ALL_SERVERS,
  servers
});

const receiveSingleServer = server => ({
  type: RECEIVE_SINGLE_SERVER,
  server
});

export const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

const leaveServer = serverId => ({
  type: LEAVE_SERVER,
  serverId
});

export const createServer = server => dispatch => (
  APIUtil.createServer(server).then(server => {
    dispatch(receiveSingleServer(server));
    return server;
  }).fail(err => dispatch(receiveServerErrors(err.responseJSON)))
);

export const removeServerMembership = serverId => dispatch => (
  APIUtil.removeServerMembership(serverId).then(server => dispatch(leaveServer(server.id)))
);

export const fetchUserServers = () => dispatch => (
  ApiUtil.fetchServers().then(servers => dispatch(receiveAllServers(servers)))
);
