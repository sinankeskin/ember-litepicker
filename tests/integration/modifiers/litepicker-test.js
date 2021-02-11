import { clickable, create } from 'ember-cli-page-object';
import { module, test } from 'qunit';

import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';
import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';

let page = create({
  input: { scope: '[data-test-litepicker]' },
  calendar: {
    testContainer: '.container__main',
    days: {
      scope: '.container__days',
      day10: clickable('.day-item', { at: 9 }),
      day12: clickable('.day-item', { at: 11 }),
    },
  },
});

module('Integration | Modifier | litepicker', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it Works', async function (assert) {
    this.startDate = new Date(2019, 11, 23); // month is 0 based
    this.endDate = new Date(2019, 11, 28);
    this.onDateChanged = (startDate, endDate) => {
      set(this, 'startDate', startDate);
      set(this, 'endDate', endDate);
    };

    await render(hbs`
      <Input data-test-litepicker
        {{litepicker
          singleMode=false
          startDate=this.startDate
          endDate=this.endDate
          onSelected=this.onDateChanged
        }}
      />`);

    assert.equal(
      page.input.value,
      '23.12.2019 - 28.12.2019',
      'Input contains the initial range'
    );

    await page.input.click();
    await page.calendar.days.day10();
    await page.calendar.days.day12();

    assert.equal(
      page.input.value,
      '10.12.2019 - 12.12.2019',
      'Input contains the updated range'
    );

    assert.equal(this.startDate.getDate(), 10, 'Saved Start date was updated');
    assert.equal(this.endDate.getDate(), 12, 'Saved End date was updated');
  });
});
