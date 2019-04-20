var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // saving data into Messages object with objectId as keys
      // render messages
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        Messages[results[i].objectId] = results[i];
        if (results[i].text) {
          MessagesView.renderMessage(results[i]);
        }
      }

      // save rooms into Rooms object with roomname as keys
      for (var id in Messages) {
        if (Messages[id].roomname) {
          var roomname = Messages[id].roomname;
          Rooms[roomname] = roomname;
        } 
      }

      // render rooms
      for (var roomname in Rooms) {
        RoomsView.renderRoom(roomname);
      }


      callback();
    });      
    
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
