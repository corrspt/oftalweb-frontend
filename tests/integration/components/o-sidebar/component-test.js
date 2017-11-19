import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('o-sidebar', 'Integration | Component | o sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{o-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#o-sidebar}}
      template block text
    {{/o-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
