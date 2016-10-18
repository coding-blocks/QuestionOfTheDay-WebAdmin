import Ember from 'ember';
import StartupInitializer from 'cbqotd/initializers/startup';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | startup', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  StartupInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
