var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),
  currentRoom: 'lobby', 

  initialize: function() {
    this.$button = $('#rooms button');
    this.$select = $('#rooms select');

    this.$button.on('click', function(event) {
      currentRoom = prompt('Add a room name');
    })
  },

  renderRoom: function(roomname) {
    var html = "<option>" + roomname + "</option>";
    this.$select.append(html);
  },
  
};
