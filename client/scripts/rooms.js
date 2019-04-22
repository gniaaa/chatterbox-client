var Rooms = {

  myRooms: { 'lobby': 'lobby' },

  add: function (newRoom) {
    this.myRooms[newRoom] = newRoom;
    RoomsView.renderRoom(newRoom);
    $('#room select').val(newRoom);
  },


};