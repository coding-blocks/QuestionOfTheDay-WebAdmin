import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel : function (transition) {
    "use strict";
    Parse.User.logOut();
    transition.abort();
    this.transitionTo('index');
  }
});
