App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("page1");

});

/*
 * COLLECTIONS CODE STARTS HERE
 */

// Collections Route
App.Page1Route = Ember.Route.extend({
  model: function() {
    return $.getJSON("/fromsql").then(function(data) {

      return data

    });
  }
});

