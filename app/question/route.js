import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),
  beforeModel : function (transition) {
    "use strict";
    if (!this.get('user.currentUser')) {
      console.log('Only for logged in users');
      transition.abort();
      this.transitionTo('index');
    }
  }
});
