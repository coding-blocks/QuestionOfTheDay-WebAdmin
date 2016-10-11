import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  option1: DS.attr('string'),
  option2: DS.attr('string'),
  option3: DS.attr('string'),
  option4: DS.attr('string'),
  date: DS.attr('date')
});
