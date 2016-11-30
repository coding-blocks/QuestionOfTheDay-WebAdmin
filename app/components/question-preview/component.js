import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    "use strict";
    this._super(...arguments);
    this.set('q', this.get('ques').toJSON());
    this.set('usermode', (Parse.User.current() != null));
  },
  actions : {
    deleteQuestion(ques) {
      "use strict";
      console.log('Delete Question');
      console.log(ques);
      ques.destroy();
      this.get("onDeleteQues")();
    },
    editQuestion(ques) {
      "use strict";
      this.get("onEditQues")(ques.id);
    }
  }
});
