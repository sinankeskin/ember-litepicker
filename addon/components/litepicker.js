/* globals Litepicker */
import TextField from '@ember/component/text-field';
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

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
export default TextField.extend({
  classNames: ['ember-litepicker-input'],
  /**
   * ARIA bindings for a textbox.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role
   * @see https://labs.levelaccess.com/index.php/Category:ARIA
   * @argument attributeBindings
   */
  attributeBindings: [
    'aria-activedescendent',
    'aria-autocomplete',
    'aria-describedby',
    'aria-labelledby',
    'aria-multiline',
    'aria-placeholder',
    'aria-readonly',
    'aria-required'
  ],

  _config: computed({
    get() {
      const config =
        getOwner(this).resolveRegistration('config:environment') || {};

      return config['ember-litepicker'] || {};
    }
  }),

  _options: computed('_config', 'attrs', {
    get() {
      const options = this._defaultOptions();

      assign(options, this._config, this._componentOptions());

      return options;
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    this._setupLitepicker();
  },

  didUpdateAttrs() {
    this._super(...arguments);

    this._updateOptions();
  },

  willDestroyElement() {
    this._super(...arguments);

    this.get('picker').destroy();
  },

  /**
   * @argument element
   * @type {HtmlElement} HTML Input Element
   */
  _defaultOptions() {
    return {
      element: this.element
    };
  },

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
   * @type String
   */

  /**
   * @argument tooltipText
   * @type String
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

  _componentOptions() {
    const defaults = [
      'elementEnd',
      'parentEl',
      'firstDay',
      'format',
      'lang',
      'numberOfMonths',
      'numberOfColumns',
      'startDate',
      'endDate',
      'zIndex',
      'minDate',
      'maxDate',
      'minDays',
      'maxDays',
      'selectForward',
      'selectBackward',
      'splitView',
      'inlineMode',
      'singleMode',
      'autoApply',
      'allowRepick',
      'showWeekNumbers',
      'showTooltip',
      'hotelMode',
      'disableWeekends',
      'scrollToDate',
      'lockDaysFormat',
      'lockDays',
      'disallowLockDaysInRange',
      'bookedDaysFormat',
      'bookedDays',
      'buttonText',
      'tooltipText',
      'onShow',
      'onHide',
      'onSelect',
      'onError',
      'onChangeMonth',
      'onChangeYear'
    ];

    const options = {};

    defaults.forEach(option => {
      if (isPresent(this.get(option))) {
        options[option] = this.get(option);
      }
    });

    return options;
  },

  _setupLitepicker() {
    this.set('picker', new Litepicker(this.get('_options')));
    this._setLitepickerDate();
  },

  _setLitepickerDate() {
    const singleMode = this.get('singleMode');

    if (isPresent(singleMode)) {
      if (singleMode) {
        const value = this.get('value');

        if (isPresent(value)) {
          this.get('picker').setDate(value);
        }
      } else {
        const startDate = this.get('startDate');

        if (isPresent(startDate)) {
          const endDate = this.get('endDate');

          if (isPresent(endDate)) {
            this.get('picker').setDateRange(startDate, endDate);
          } else {
            this.get('picker').setDateRange(startDate, null);
          }
        }
      }
    }
  },

  _updateOptions() {
    this.get('picker').setOptions(this.get('_options'));
  }
});
