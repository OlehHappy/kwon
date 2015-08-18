App = Ember.Application.create();

App.Router.map(function() {
  this.route("notes");
  this.route("notes2");
});

App.Item = Ember.Object.extend();

App.Item.reopenClass({
  all: function() {
    return $.getJSON("/fromsql").then(function(response) {
      var body = [];

      response.forEach( function (item) {
        body.push( App.Item.create(item) );
      });

      return body;
    });
  }
});

App.Notes2Route = Ember.Route.extend({
  model: function() {
    return App.Item.all();
  }
});


App.NotesRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON("/fromsql").then(function(data) {
      return data
    });
  }
});

