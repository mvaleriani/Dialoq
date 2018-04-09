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
