import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  init: () => {
    $('#nav-questions').addClass('active');
  }
});
