var Rooms = {

  myRooms: { 'lobby': 'lobby' },

  add: function (newRoom) {
    if (newRoom in this.myRooms) {
      alert('This room already exists!');

      $('#rooms select').val(newRoom);
      Rooms.showOnly(newRoom);
    } else {
      this.myRooms[newRoom] = newRoom;
      RoomsView.renderRoom(newRoom);

      $('#rooms select').val(newRoom);
      Rooms.showOnly(newRoom);
    }
  },

  showOnly: function (roomname) {
    $(".roomname:contains('" + roomname + "')").parent().show();
    $(".roomname").not(":contains('" + roomname + "')").parent().hide();
  }

};