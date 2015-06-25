import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        body: this.get('body'),

      });
      newQuestion.save();

      this.setProperties({
        name: '',
        body: ''
      });

      this.transitionToRoute('questions');
    }
  }
});
