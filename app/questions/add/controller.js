import Ember from 'ember';
import ParseAdapter from 'cbqotd/adapters/parse'
import Question from 'cbqotd/questions/model'

export default Ember.Controller.extend({
  actions: {
    addQuestion() {
      let question = new Question('WOW');
      ParseAdapter.createRecord(question.className, question, function (obj, err) {
        console.log(obj + 'Saved');
      });
    }
  }
});
