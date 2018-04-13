import * as APIUtil from '../util/roomAPIUtil';

export const RECEIVE_SERVER_ROOMS = 'RECEIVE_SERVER_ROOMS';
export const RECEIVE_SERVER_ROOM = 'RECEIVE_SERVER_ROOM';
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';
export const RECEIVE_ROOM_MESSAGES = 'RECEIVE_ROOM_MESSAGES';

const receiveServerRooms = rooms => ({
  type: RECEIVE_SERVER_ROOMS,
  rooms
});

const receiveServerRoom = room => ({
  type: RECEIVE_SERVER_ROOM,
  room
});

export const receiveRoomErrors = errors => ({
  type: RECEIVE_ROOM_ERRORS,
  errors
});

const receiveRoomMessages = messages => ({
  type: RECEIVE_ROOM_MESSAGES,
  messages
});

export const clearMessages = emptyMessages => dispatch => (
  dispatch(receiveRoomMessages(emptyMessages))
);

export const clearRooms = emptyRooms => dispatch => (
  dispatch(receiveServerRooms(emptyRooms))
);

export const createRoom = room => dispatch => (
  APIUtil.createRoom(room).then(room => {
    dispatch(receiveServerRoom(room));
    return room;
  }).fail(err => dispatch(receiveRoomErrors(err.responseJSON)))
);

export const fetchServerRooms = serverId => dispatch => (
  APIUtil.fetchServerRooms(serverId).then(rooms => dispatch(receiveServerRooms(rooms)))
);


export const fetchRoomMessages = roomId => dispatch => (
  APIUtil.fetchRoomMessages(roomId).then(messages => dispatch(receiveRoomMessages(messages)))
);
