var Friends = {

  myFriends: {},

  toggleStatus: function (username) {
    if (!this.myFriends[username]) {
      this.myFriends[username] = username;
      $(".username:contains(" + username + ")").parent().addClass('friend');
    } else {
      delete this.myFriends[username];
      $(".username:contains(" + username + ")").parent().removeClass('friend');
    }
  }

};