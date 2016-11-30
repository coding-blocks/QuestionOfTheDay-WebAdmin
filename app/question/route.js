import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel : function (transition) {
    "use strict";
    if (!Parse.User.current()) {
      console.log('Only for logged in users');
      transition.abort();
      this.transitionTo('index');
    }
  }
});
