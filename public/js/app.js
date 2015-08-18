App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("notes");

});

App.NotesRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON("/fromsql").then(function(data) {

      return data

    });
  }
});

