export const fetchSearchResults = (search) => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: {search}
  })
);
