import * as APIUtil from '../util/userAPIUtil';

export const RECEIVE_SINGLE_FRIEND = 'RECEIVE_SINGLE_FRIEND';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

const receiveSingleFriend = friend => ({
  type: RECEIVE_SINGLE_FRIEND,
  friend
});

const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
});

export const fetchFriends = () => dispatch =>{
  APIUtil.fetchFriends()
    .then(friends => dispatch(receiveFriends(friends)))
};

export const addFriend = user => dispatch =>{
  APIUtil.addFriend(user)
    .then(friend => dispatch(receiveSingleFriend(friend)))
};
