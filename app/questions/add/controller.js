import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion(q, o1, o2, o3, o4) {
      let newQuestion = this.store.createRecord('questions', {
        question: q,
        option1: o1,
        option2: o2,
        option3: o3,
        option4: o4,
        date: new Date()
      });
      newQuestion.save()
        .then(() => {
          // Question is saved
          // Show modal here and do the happy dance
        })
        .catch((e) => {
          console.error('save: failure', e);
        });
    }
  }
});
