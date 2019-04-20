var Friends = {
    
    myFriends: {},
    
    toggleStatus: function(username) {
        if (!this.myFriends[username]) {
            this.myFriends[username] = username;
        } else {
            delete this.myFriends[username];
        }
    }

};