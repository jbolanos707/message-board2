import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  Router.map(function() {
    this.resource('questions', {path: "/"});
  });
});



export default Router;
