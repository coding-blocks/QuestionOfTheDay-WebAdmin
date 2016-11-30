import Ember from 'ember';
import Question from 'cbqotd/question/model';


export default Ember.Component.extend({
  elementId: 'question-editor',
  init () {
    "use strict";
    this._super(...arguments);
    this.addObserver("q", this, function(controller,key) {
      $('#question-editor').show();
      this.set('question',this.q.question);

    });
  },
  didRender: function() {
    console.log('didRender');
    if (this.get('questionId')) {
      if (!this.get('q')) {
        $('#question-editor').hide();
        Question.findById(this.get('questionId')).then(function (q) {
          "use strict";
          console.log(q.toJSON());
          this.set('q', q.toJSON());
        }.bind(this));
      }
    }

  },

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
        Parse.User.current(),
        this.get('qTags').split(',')
      ).then(function (q) {
        console.log(q);
      });
    }
  }
});
