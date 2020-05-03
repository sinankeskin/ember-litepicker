/* globals Litepicker */
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { action, computed, get } from '@ember/object';
import Component from '@glimmer/component';

/**
 * Litepicker component
 *
 * Usage:
 *
 * * Base
 * ``` handlebars
 * <Litepicker @onSelect={{action "onSelect"}} />
 * ```
 * * Full
 * ``` handlebars
 * <Litepicker @secondField={{null}} @firstDay={{1}} @parentEl="body" @lang="auto" @format="DD/MM/YYYY" @separator=" - " @numberOfMonths={{1}} @numberOfColumns={{2}} @singleDate={{true}} @autoclose={{true}} @repick={{false}} @value={{null}} @startDate={{null}} @endDate={{null}} @minDate={{null}} @maxDate={{null}} @disableDates={{null}} @selectForward={{false}} @selectBackward={{false}} @minDays={{null}} @maxDays={{null}} @hoveringTooltip={{true}} @hideOnBodyClick={{true}} @footer={{false}} @disabledDatesInRange={{true}} @tooltipNights={{false}} @orientation={{"auto"}} @disableWeekends={{false}} @inline={{false}} @weekdayStyle="short" @dropdowns={{hash years=(hash min=1900 max= null) months=true}} @locale={{hash buttons=(hash prev="&leftarrow;" next="&rightarrow;" close="&times;" reset="Reset" apply="Apply" tooltip=(hash one="day" other="days" tooltipOnDisabled=null }} @onSelect={{action "onSelect"}} @onSelectStart={{action "onSelectStart"}} @onSelectEnd={{action "onSelectEnd"}} @onOpen={{action "onOpen"}} @onClose={{action "onClose"}} @onError={{action "onError"}} @onMonthsChange={{action "onMonthsChange"}} @onYearsChange={{action "onYearsChange"}}/>
 * ```
 *
 * @class Litepicker
 * @public
 */
export default class LitepickerComponent extends Component {
  @computed
  get _config() {
    const config = getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-litepicker'] || {};
  }

  @computed('_config')
  get _options() {
    const options = this._defaultOptions();

    assign(options, this._config, this._componentOptions());

    return options;
  }

  /**
   * @argument element
   * @type {HtmlElement} HTML Input Element
   */
  _defaultOptions() {
    return {
      element: this.element
    };
  }

  /**
   * @argument elementEnd
   * @type {HtmlElement}
   */

  /**
   * @argument parentEl
   * @type HtmlElement|String
   */

  /**
   * @argument firstDay
   * @type Number
   */

  /**
   * @argument format
   * @type String
   */

  /**
   * @argument lang
   * @type String
   */

  /**
   * @argument numberOfMonths
   * @type Number
   */

  /**
   * @argument numberOfColumns
   * @type Number
   */

  /**
   * @argument startDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument endDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument zIndex
   * @type Number
   */

  /**
   * @argument minDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument maxDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument minDays
   * @type moment|String|Number|Date
   */

  /**
   * @argument maxDays
   * @type moment|String|Number|Date
   */

  /**
   * @argument selectForward
   * @type Boolean
   */

  /**
   * @argument selectBackward
   * @type Boolean
   */

  /**
   * @argument splitView
   * @type Boolean
   */

  /**
   * @argument inlineMode
   * @type Boolean
   */

  /**
   * @argument singleMode
   * @type Boolean
   */

  /**
   * @argument autoApply
   * @type Boolean
   */

  /**
   * @argument allowRepick
   * @type Boolean
   */

  /**
   * @argument showWeekNumbers
   * @type Boolean
   */

  /**
   * @argument showTooltip
   * @type Boolean
   */

  /**
   * @argument hotelMode
   * @type Boolean
   */

  /**
   * @argument disableWeekends
   * @type Boolean
   */

  /**
   * @argument scrollToDate
   * @type Boolean
   */

  /**
   * @argument mobileFriendly
   * @type Boolean
   */

  /**
   * @argument useResetBtn
   * @type Boolean
   */

  /**
   * @argument lockDaysFormat
   * @type String
   */

  /**
   * @argument lockDays
   * @type Array
   */

  /**
   * @argument disallowLockDaysInRange
   * @type Boolean
   */

  /**
   * @argument bookedDaysFormat
   * @type String
   */

  /**
   * @argument bookedDays
   * @type Array
   */

  /**
   * @argument buttonText
   * @type Object
   */

  /**
   * @argument tooltipText
   * @type Object
   */

  /**
   * @argument onShow
   * @type Function
   */

  /**
   * @argument onHide
   * @type Function
   */

  /**
   * @argument onSelect
   * @type Function
   */

  /**
   * @argument onError
   * @type Function
   */

  /**
   * @argument onChangeMonth
   * @type Function
   */

  /**
   * @argument onChangeYear
   * @type Function
   */

  /**
   * @argument resetBtnCallback
   * @type Function
   */

  /**
   * @argument onDayHover
   * @type Function
   */

  _componentOptions() {
    const options = {};

    Object.keys(this.args).forEach((option) => {
      const _option = get(this.args, option);

      if (typeof _option === 'object') {
        options[option] = Object.assign({}, _option);
      } else {
        options[option] = _option;
      }
    });

    return options;
  }

  @action
  _initializeOptions(element) {
    this.element = element;
    this.picker = new Litepicker(this._options);
  }

  @action
  _updateOptions() {
    this.picker.setOptions(this._options);
  }

  @action
  _destroyOptions() {
    this.picker.destroy();
  }
}
