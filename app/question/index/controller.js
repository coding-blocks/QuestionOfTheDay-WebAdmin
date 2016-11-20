import Ember from 'ember';
import Question from 'cbqotd/question/model';

function refreshQuestions (ctrl) {
  "use strict";
  Question.getAll().then(function (results) {
    ctrl.set('quesList', results);
  });
}

export default Ember.Controller.extend({
  init: function () {
    "use strict";
    this._super(...arguments);
    refreshQuestions(this);
  },
  actions : {
    didDeleteQuestion () {
      "use strict";
      refreshQuestions(this);
    }
  }
});
