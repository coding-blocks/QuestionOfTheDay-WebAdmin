import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  init: () => {
    $('#nav-login').addClass('active');
  }
});
