import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  answer_body: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
