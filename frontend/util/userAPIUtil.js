export const fetchFriends = () => (
  $.ajax({
    method: 'GET',
    url: '/api/friendships'
  })
);

export const addFriend = user => {
  let friendship = {user_id: user.user_id}

  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: {friendship}
  })
};
