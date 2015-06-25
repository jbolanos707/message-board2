import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  description: DS.attr('string'),
  body: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
