import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: "/"}, function(){
    this.resource('new-question', {path: "/questions/new"});
  });
  this.resource('question', {path: "/questions/:question_id"}, function(){
    this.resource('new-answer');
    // this.resource('answer', {path: "/answers/:answer_id"});
  });

});

export default Router;
