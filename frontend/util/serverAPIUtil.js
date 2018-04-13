export const createServer = server => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: {server}
  })
);

export const removeServerMembership = serverId => (
  $.ajax({
    method: 'DELETE',
    url: '/api/server_memberships'
  })
);

export const fetchUserServers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/server_memberships'
  })
);

export const fetchServerMembers = serverId => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/users`
  })
);

export const joinServer = server => {
  let server_membership = {server_id: server.server_id}
  return $.ajax({
    method: 'POST',
    url: '/api/server_memberships',
    data: {server_membership},
  })
};
