import Ember from 'ember';
import QuestionEditor from 'cbqotd/components/question/question-editor/component';
import Question from 'cbqotd/question/model';


export default Ember.Route.extend({
  model: function (params) {
    "use strict";
    const qController = this.controllerFor('question/edit');
    qController.set("questionId", params.id);
  }
});
