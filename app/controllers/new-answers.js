import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var newDate = new Date();
      var newAnswer = this.store.createRecord('answer', {
        text: this.get('text'),
        date: newDate
      });

      var question = this.get("controllers.question.model");

      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);
        question.save();
      });
console.log(newAnswer);
      this.setProperties({
        text: ''
      });

      this.transitionToRoute('question', question.id);
    }
  }
});
