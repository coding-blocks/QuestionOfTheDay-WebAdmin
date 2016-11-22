import Ember from 'ember';

export default Ember.Service.extend({
  currentUser : null,
  loggedIn (user) {
    "use strict";
    this.set('currentUser', user);
  },
  loggedOut () {
    "use strict";
    this.set('currentUser', null);
  }
});
