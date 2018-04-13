import * as APIUtil from '../util/serverAPIUtil';

export const RECEIVE_USER_SERVERS = 'RECEIVE_USER_SERVERS';
export const RECEIVE_SINGLE_SERVER = 'RECEIVE_SINGLE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RECEIVE_SERVER_MEMBERS = 'RECEIVE_SERVER_MEMBERS';
// export const CREATE_SERVER = 'CREATE_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

const receiveUserServers = servers => ({
  type: RECEIVE_USER_SERVERS,
  servers
});

const receiveSingleServer = server => ({
  type: RECEIVE_SINGLE_SERVER,
  server
});

const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

const receiveServerMembers = users => ({
  type: RECEIVE_SERVER_MEMBERS,
  users
});

const leaveServer = serverId => ({
  type: LEAVE_SERVER,
  serverId
});

export const joinServer = server => dispatch => (
  APIUtil.joinServer(server)
    .then(server => dispatch(receiveSingleServer(server)))
);

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
  APIUtil.fetchUserServers().then(servers => dispatch(receiveUserServers(servers)))
);

export const fetchServerMembers = serverId => dispatch => (
  APIUtil.fetchServerMembers(serverId).then(users => dispatch(receiveServerMembers(users)))
);
