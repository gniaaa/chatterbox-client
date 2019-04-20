var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),

  initialize: function() {
    this.$button = $('#rooms button');
    this.$select = $('#rooms select');

    this.$button.on('click', function(event) {
      var newRoom = prompt('Add a room name');
      if (newRoom) {
        Rooms.add(newRoom);
      }
    });
  },


  renderRoom: function(roomname) {
    var html = "<option value='" + roomname + "'>" + roomname + "</option>";
    this.$select.append(html);
  },
  
};

// "<option value='4chan'>4chan</option>"