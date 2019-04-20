var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),

  initialize: function() {
    this.$button = $('#rooms button');
    this.$select = $('#rooms select');
  },

  renderRoom: function(roomname) {
    var html = "<option>" + roomname + "</option>";
    this.$select.append(html);
  },
  
};
