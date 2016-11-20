import Ember from 'ember';
import User from 'cbqotd/user/model';

export default Ember.Controller.extend({
  init : function () {
    "use strict";

  },
  actions : {
    signup (u, e, p, pc) {
      "use strict";
      if (!u || !p || !e) {
        alert('Enter all details please');
        return;
      }
      if (p !== pc) {
        alert('Passwords do not match');
        return;
      }
      console.log(e);
      if (e.indexOf('@') < 1 || e.indexOf('.') < 1) {
        alert('Enter valid email address please');
        return;
      }
      User.doSignup(u, p, e).then(function (user) {

      }, function (user, err) {

      });

    }
  }
});
