import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

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
}
