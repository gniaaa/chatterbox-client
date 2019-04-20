var Rooms = {
  
  myRooms: {},

  add: function(newRoom) {
    this.myRooms[newRoom] = newRoom;
    RoomsView.renderRoom(newRoom);
  },
    

};