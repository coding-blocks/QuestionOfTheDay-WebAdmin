import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign', function() {
    this.route('in', {path: '/'});
    this.route('in');
    this.route('up');
  });
  this.route('questions', function() {
    this.route('index', {path: '/'});
    this.route('add');
  });
});

export default Router;
