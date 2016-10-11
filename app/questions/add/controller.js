import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateQuestion(elem) {
      this.question = elem.innerHTML;
    }
  }
});
