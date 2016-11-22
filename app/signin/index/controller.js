import Ember from 'ember';
import User from 'cbqotd/user/model';

const Promise = Ember.RSVP.Promise;

export default Ember.Controller.extend({
  user: Ember.inject.service(),
  actions : {
    login: function (u,p) {
      User.doLogin(u,p).then(function (user) {
        "use strict";
          $('.ui.login-success.small.modal').modal('show');
        this.get('user').loggedIn(Parse.User.current());
      }.bind(this), function (user, err) {
        "use strict";
        $('.ui.login-fail.small.modal').modal('show');
      });
    }
  }
});
