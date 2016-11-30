import Ember from 'ember';

export default Ember.Controller.extend({
  init : function () {
    "use strict";
    $("#question-editor").hide();
    this.addObserver("questionId", function(controller,qId) {
      console.log(qId);

    });
  }

});
