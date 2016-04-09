// var tmi = require("tmi.js");

define([
  'jquery',
  'underscore',
  'backbone',
  "tmi",
  "twitchOptions"
], function($, _, Backbone, Tmi, TwitchOptions) {

  var TestView = Backbone.View.extend({
    el: $("body"),
    render: function() {
      Tmi = irc;
      var templ = _.template("Hello world test");
      this.$el.html(templ());
      this.twitchConnect();
      return this;
    },

    twitchConnect: function() {
      var options = TwitchOptions;
      console.log(options)

      var client = new Tmi.client(options);
      client.connect();

      client.color("SpringGreen");

      client.on("connected", function(address, port) {
        client.action("CynderR_Nash", "HEllow!");

        client.api({
          url: "https://api.twitch.tv/kraken/channels/CynderR_Nash/follows"
        }, function(err, res, body) {
          console.log(body);
        });
      });

      client.on("chat", function(channel, user, message, self) {
        client.action("CynderR_Nash", user["display-name"]  + "HEyaa.");
      });

    }
  });

  return TestView;
});
