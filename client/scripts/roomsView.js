var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),

  initialize: function () {
    this.$button = $('#rooms button');
    this.$select = $('#rooms select');

    $('#room select').val('lobby');
    $(".roomname").not(":contains('lobby')").parent().hide();

    this.$button.on('click', function (event) {
      var newRoom = prompt('Add a room name');
      if (newRoom) {
        Rooms.add(newRoom);
      }
    });

    this.$select.on('change', function (event) {
      var optionSelected = $('option:selected', this);
      var valueSelected = this.value;
      $(".roomname:contains('" + valueSelected + "')").parent().show();
      $(".roomname").not(":contains('" + valueSelected + "')").parent().hide();
    });

  },

  renderRoom: function (roomname) {
    var html = "<option value='" + roomname + "'>" + roomname + "</option>";
    this.$select.append(html);
  },

};

