import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    "use strict";
    if (Parse.User.current()) {
      console.log('Already logged in user cannot signup');
      transition.abort();
      this.transitionTo('index');
    }
  }
});
