import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    "use strict";
    this._super(...arguments);
    this.set('q', this.get('ques').toJSON());
  },
  actions : {
    deleteQuestion(ques) {
      "use strict";
      console.log('Delete Question');
      console.log(ques);
      ques.destroy();
      this.get("onDeleteQues")();
    }
  }
});
