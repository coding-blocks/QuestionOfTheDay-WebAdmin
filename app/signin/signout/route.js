import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),
  beforeModel : function (transition) {
    "use strict";
    Parse.User.logOut();
    this.get('user').loggedOut();
    transition.abort();
    this.transitionTo('index');
  }
});
