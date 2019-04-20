var MessagesView = {

  // $chats: $('#chats'),

  initialize: function() {
    this.$chats = $('#chats');
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    var $message = $(html);
    $message.find('.username').on('click', function(event) {
      Friends.toggleStatus(event.target.innerText);
    })
    this.$chats.append($message);
  }

};