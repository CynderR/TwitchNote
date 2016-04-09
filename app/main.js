//var requirejs = require('requirejs');
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: '/node_modules/jquery/dist/jquery.min',
    underscore: '/node_modules/backbone/node_modules/underscore/underscore-min',
    backbone: '/node_modules/backbone/backbone-min',
    templates: '../templates',
    tmi: "/app/lib/tmi",
    twitchOptions: "/app/config/config"
  }

});

require([
  "app"
], function(App) {
  App.initialize();
});
