import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, find, click } from '@ember/test-helpers';
import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { calendarSelect } from 'ember-litepicker/test-support';

module('Integration | Component | litepicker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.startDate = new Date(2019, 11, 23); // month is 0 based
    this.endDate = new Date(2019, 11, 28);
    this.onDateChanged = (startDate, endDate) => {
      set(this, 'startDate', startDate);
      set(this, 'endDate', endDate);
    };

    await render(
      hbs`<Litepicker @singleMode={{false}} @startDate={{this.startDate}} @endDate={{this.endDate}} @onSelected={{this.onDateChanged}} data-test-litepicker />`
    );

    const litepicker = find('[data-test-litepicker]');

    assert.equal(
      litepicker.value,
      '2019-12-23 - 2019-12-28',
      'Input contains the initial range'
    );

    await click(litepicker);
    await calendarSelect(litepicker, new Date(2019, 11, 10));
    await calendarSelect(litepicker, new Date(2019, 11, 12));

    assert.equal(
      litepicker.value,
      '2019-12-10 - 2019-12-12',
      'Input contains the updated range'
    );

    assert.equal(this.startDate.getDate(), 10, 'Saved Start date was updated');
    assert.equal(this.endDate.getDate(), 12, 'Saved End date was updated');
  });
});
