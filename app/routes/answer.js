import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: "answer"});
  },
  model: function(params) {
    return this.store.find('answer', params.answer_id);
  }
});
