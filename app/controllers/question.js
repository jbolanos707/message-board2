import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function(params){

      var _this = this;
      this.store.find('question', params.id).then(function(question) {
        question.set('name', _this.get('model.name'));
        question.set('body', _this.get('model.body'));

        question.save();
        alert('Edits Saved!');
      });

      this.set('isEditing', false);
    },

    delete: function(){
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }

});
