define([
	"jquery",
	"underscore",
	"backbone",
  "views/testView"
], function($, _, Backbone, TestView) {
 var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'test': 'showTest',

      // Default
      '*path': 'defaultRoute'
    }
  });


  var initialize = function() {
    var app_router = new AppRouter;
    
    app_router.on('route:showTest', function() {
   
        // Call render on the module we loaded in via the dependency array
        var testView = new TestView();
        testView.render();

    });

    app_router.on('route:defaultRoute', function (path) {
     console.log("S")
       // We have no matching route, lets display the home page 
        var homeView = new TestView();
        homeView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
