import { click, find } from '@ember/test-helpers';

import { assert } from '@ember/debug';

export async function calendarSelect(
  triggerSelector,
  selectedDate,
  containerSelector = document
) {
  assert(
    '`calendarSelect` expect a Date object as second argument',
    selectedDate
  );

  const trigger = find(triggerSelector);

  if (trigger) {
    await click(trigger);
  }

  const container = find(containerSelector);

  const calendarElement = container.querySelector('.litepicker');

  const dayElement = calendarElement.querySelector(
    `.container__main .container__days .day-item[data-time="${selectedDate.setHours(
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
