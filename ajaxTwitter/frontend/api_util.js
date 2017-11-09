const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      url: '/users/search',
      method: 'GET',
      dataType: 'json',
      data: {query: queryVal}
    });
  },

  createTweet: (data) => {
    return $.ajax({
      url: '/tweets',
      method: 'POST',
      dataType: 'json',
      data: data
    });
  }
};

module.exports = APIUtil;
