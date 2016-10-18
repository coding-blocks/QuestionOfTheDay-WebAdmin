import Ember from 'ember';
import InitializeInitializer from 'cbqotd/initializers/initialize';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | initialize', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  InitializeInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
