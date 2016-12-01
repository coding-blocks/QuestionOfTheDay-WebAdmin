import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  currentUser : Ember.computed('loggedIn', function () {
    "use strict";
    console.log('Compute currentUser');
    let parseUser = Parse.User.current();
    if (parseUser) {
      this.set('loggedIn', true);
      return parseUser;
    } else {
      this.set('loggedIn', false);
      return null;
    }
  })
});
