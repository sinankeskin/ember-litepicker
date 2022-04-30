import { click, find } from '@ember/test-helpers';

import { assert } from '@ember/debug';

export async function calendarSelect(selector, selected) {
  assert('`calendarSelect` expect a Date object as second argument', selected);

  const target = find(selector);

  if (target) {
    await click(target);
  }

  const calendarElement = document.querySelector('.litepicker');

  const dayElement = calendarElement.querySelector(
    `.container__main .container__days .day-item[data-time="${selected.setHours(
      0,
      0,
      0,
      0
    )}"]`
  );

  if (dayElement) {
    return click(dayElement);
  }
}
