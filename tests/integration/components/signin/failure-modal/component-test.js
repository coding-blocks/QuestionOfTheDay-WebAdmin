import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('signin/failure-modal', 'Integration | Component | signin/failure modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{signin/failure-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#signin/failure-modal}}
      template block text
    {{/signin/failure-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
