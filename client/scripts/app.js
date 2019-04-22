var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
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
          Rooms.myRooms[roomname] = roomname;
        }
      }

      // render rooms
      for (var roomname in Rooms.myRooms) {
        RoomsView.renderRoom(roomname);
      }

      $(".roomname").not(":contains('lobby')").parent().hide();

      callback();
    });

  },

  refresh: function () {
    Parse.readAll((data) => {

      // retrieve data again, start from bottom
      var newResults = data.results;
      for (var i = newResults.length - 1; i >= 0; i--) {
        var id = newResults[i].objectId;
        var roomname = newResults[i].roomname;

        // update Messages object with new messages and render immediately
        if (!(id in Messages)) {
          Messages[id] = newResults[i];
          if (newResults[i].text) {
            MessagesView.renderNewMessage(newResults[i]);
          }
        }

        // update Rooms object with new rooms and render immediately
        if (!(roomname in Rooms.myRooms)) {
          Rooms.myRooms[roomname] = roomname;
          RoomsView.renderRoom(roomname);
        }

      }

    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
