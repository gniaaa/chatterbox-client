var MessagesView = {

  // $chats: $('#chats'),

  initialize: function() {
    this.$chats = $('#chats');
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};