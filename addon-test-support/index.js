import { click, find } from '@ember/test-helpers';

import { assert } from '@ember/debug';

export async function calendarSelect(selector, selected) {
  assert('`calendarSelect` expect a Date object as second argument', selected);

  let target = find(selector);

  if (target) {
    await click(target);
  }

  let calendarElement = find('.litepicker');
  let dayElement = calendarElement.querySelector(
    `.container__main .container__days .day-item[data-time="${selected.getTime()}"]`
  );

  if (dayElement) {
    return click(dayElement);
  }
}
