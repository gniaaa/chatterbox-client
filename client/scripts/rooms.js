var Rooms = {
    
    add: function(newRoom) {
        Rooms[newRoom] = newRoom;
        RoomsView.renderRoom(newRoom);
    }
    

};