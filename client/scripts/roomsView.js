var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),

  initialize: function () {
    this.$button = $('#rooms button');
    this.$select = $('#rooms select');

    this.$button.on('click', function (event) {
      var newRoom = prompt('Add a room name');
      if (newRoom) {
        Rooms.add(newRoom);
      }
    });

    this.$select.on('change', function (event) {
      var optionSelected = $('option:selected', this);
      var valueSelected = this.value;
      Rooms.showOnly(valueSelected);
    });

  },

  renderRoom: function (roomname) {
    var html = "<option value='" + roomname + "'>" + roomname + "</option>";
    this.$select.append(html);
  },

};

