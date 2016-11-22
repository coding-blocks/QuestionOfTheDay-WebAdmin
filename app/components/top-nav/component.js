import Ember from 'ember';

export default Ember.Component.extend({
  willRender : function () {
    "use strict";
    this._super(...arguments);
    if (Parse.User.current()) {
      this.set('signedin', true);
    } else {
      this.set('signedin', false);
    }
  }
});
