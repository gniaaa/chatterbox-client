var MessageView = {

  render: _.template(
      
      "<div class='chat'>" +
        "<div class='username'><%- username %></div>" +
        "<div class='text'><%- text %></div>" +
      "</div>"

    )

};

// "<div class='chat'>" +
// "<div class='username'>ivan</div>" +
// "<div class='text'>hello</div>" +
// "</div>"