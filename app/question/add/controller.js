import Ember from 'ember';
import Question from 'cbqotd/question/model';

export default Ember.Controller.extend({
  actions : {
    submitQuestion () {
      "use strict";
      console.log(this.get('opt1'));
      Question.addNew(this.get('question'), [
        {option: this.get('option1'), correct: this.get('opt1')},
        {option: this.get('option2'), correct: this.get('opt2')},
        {option: this.get('option3'), correct: this.get('opt3')},
        {option: this.get('option4'), correct: this.get('opt4')},
      ],
      Parse.User.current()).then(function (q) {
        console.log(q);
      },
      this.get('qTags').split(','));
    }
  }
});
