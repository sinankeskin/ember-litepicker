/* globals Litepicker */
import Modifier from 'ember-modifier';
import { cached } from '@glimmer/tracking';
import { getOwner } from '@ember/application';

export default class LitepickerModifier extends Modifier {
  /**
   * The litepicker instance
   */
  picker;

  @cached
  get _config() {
    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-litepicker'] || {};
  }

  get _options() {
    const options = this._defaultOptions();

    Object.assign(options, this._config, this.getArgs());

    return options;
  }

  /**
   * @argument element
   * @type {HtmlElement} HTML Input Element
   */
  _defaultOptions() {
    return {
      element: this.element,
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

  getArgs() {
    // this is done to allow the component version to use the modifier
    return Object.keys(this.args.named).length
      ? this.args.named
      : this.args.positional[0] || {};
  }

  didUpdateArguments() {
    this.picker.setOptions(this._options);
  }

  didInstall() {
    import('litepicker').then(() => {
      const plugins = this._options['plugins'];
      const importedPlugins = [];

      if (plugins) {
        plugins.forEach((plugin) => {
          if (plugin === 'keyboardnav') {
            importedPlugins.push(import('keyboardnav'));
          }

          if (plugin === 'mobilefriendly') {
            importedPlugins.push(import('mobilefriendly'));
          }

          if (plugin === 'ranges') {
            importedPlugins.push(import('ranges'));
          }

          if (plugin === 'multiselect') {
            importedPlugins.push(import('multiselect'));
          }
        });

        Promise.all(importedPlugins).then(() => {
          this.picker = new Litepicker(this._options);

          if (
            this._options.registerAPI &&
            typeof this._options.registerAPI === 'function'
          ) {
            this._options.registerAPI(this.picker);
          }
        });
      } else {
        this.picker = new Litepicker(this._options);

        if (
          this._options.registerAPI &&
          typeof this._options.registerAPI === 'function'
        ) {
          this._options.registerAPI(this.picker);
        }
      }
    });
  }

  willRemove() {
    this.picker.destroy();
  }
}
