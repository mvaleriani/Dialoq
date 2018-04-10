export const createRoom = room => (
  $.ajax({
    method: 'POST',
    url: `/api/servers/${serverId}/rooms`,
    data: {room}
  })
);

export const fetchServerRooms = serverId => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/rooms`
  })
);

export const fetchPMRooms = () => (
  $.ajax({
    method: 'GET',
    url: `api/dm_rooms`
  })
);
