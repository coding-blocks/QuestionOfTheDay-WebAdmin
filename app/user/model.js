import Ember from 'ember';

export default Parse.User.extend(
  {
    //protoProps
  },
  {
    //classProps
    doLogin(username, password) {
      "use strict";
      return new Promise(function(resolve, reject) {
        this.logIn(username, password, {
          success: function(user) {
            // Do stuff after successful login.
            resolve(user);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            reject(user, error);
          }
        });
      }.bind(this));
    }
  });
