import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked
  litepicker;

  @action
  registerAPI(litepicker) {
    this.litepicker = litepicker;
  }

  @action
  show() {
    this.litepicker.show();
  }

  @tracked
  startDate = new Date(2019, 11, 23); // month is 0 based

  @tracked
  endDate = new Date(2019, 11, 28);

  @action
  onDateChanged(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
