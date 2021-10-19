/* globals Litepicker */

import Modifier from 'ember-modifier';
import { cached } from 'tracked-toolbox';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

export default class LitepickerModifier extends Modifier {
  /**
   * The litepicker instance
   */
  @tracked
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

    if (options.setup) {
      delete options.setup;
    }

    options.setup = (picker) => {
      picker.on('before:click', (target) => {
        if (
          options.onBeforeClick &&
          typeof options.onBeforeClick === 'function'
        ) {
          options.onBeforeClick(target);
        }
      });

      picker.on('before:render', (ui) => {
        if (
          options.onBeforeRender &&
          typeof options.onBeforeRender === 'function'
        ) {
          options.onBeforeRender(ui);
        }
      });

      picker.on('before:show', (el) => {
        if (
          options.onBeforeShow &&
          typeof options.onBeforeShow === 'function'
        ) {
          options.onBeforeShow(el);
        }
      });

      picker.on('button:apply', (date1, date2) => {
        if (
          options.onButtonApply &&
          typeof options.onButtonApply === 'function'
        ) {
          options.onButtonApply(date1, date2);
        }
      });

      picker.on('button:cancel', () => {
        if (
          options.onButtonCancel &&
          typeof options.onButtonCancel === 'function'
        ) {
          options.onButtonCancel();
        }
      });

      picker.on('change:month', (date, calendarIdx) => {
        if (
          options.onChangeMonth &&
          typeof options.onChangeMonth === 'function'
        ) {
          options.onChangeMonth(date, calendarIdx);
        }
      });

      picker.on('change:year', (date, calendarIdx) => {
        if (
          options.onChangeYear &&
          typeof options.onChangeYear === 'function'
        ) {
          options.onChangeYear(date, calendarIdx);
        }
      });

      picker.on('clear:selection', () => {
        if (
          options.onClearSelection &&
          typeof options.onClearSelection === 'function'
        ) {
          options.onClearSelection();
        }
      });

      picker.on('preselect', (date1, date2) => {
        if (options.onPreselect && typeof options.onPreselect === 'function') {
          options.onPreselect(date1, date2);
        }
      });

      picker.on('selected', (date1, date2) => {
        if (options.onSelected && typeof options.onSelected === 'function') {
          options.onSelected(date1, date2);
        }
      });

      picker.on('render', (ui) => {
        if (options.onRender && typeof options.onRender === 'function') {
          options.onRender(ui);
        }
      });

      picker.on('render:day', (day, date) => {
        if (options.onRenderDay && typeof options.onRenderDay === 'function') {
          options.onRenderDay(day, date);
        }
      });

      picker.on('render:footer', (day, date) => {
        if (
          options.onRenderFooter &&
          typeof options.onRenderFooter === 'function'
        ) {
          options.onRenderFooter(day, date);
        }
      });

      picker.on('render:month', (month, date) => {
        if (
          options.onRenderMonth &&
          typeof options.onRenderMonth === 'function'
        ) {
          options.onRenderMonth(month, date);
        }
      });

      picker.on('show', (el) => {
        if (options.onShow && typeof options.onShow === 'function') {
          options.onShow(el);
        }
      });

      picker.on('hide', () => {
        if (options.onHide && typeof options.onHide === 'function') {
          options.onHide();
        }
      });

      picker.on('tooltip', (tooltip, day) => {
        if (options.onTooltip && typeof options.onTooltip === 'function') {
          options.onTooltip(tooltip, day);
        }
      });

      picker.on('error:range', () => {
        if (
          options.onErrorRange &&
          typeof options.onErrorRange === 'function'
        ) {
          options.onErrorRange();
        }
      });

      picker.on('destroy', () => {
        if (options.onDestroy && typeof options.onDestroy === 'function') {
          options.onDestroy();
        }
      });
    };

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
    const plugins = this._options['plugins'];

    if (plugins && Array.isArray(plugins) && plugins.length > 0) {
      const importedPlugins = [];

      plugins.forEach((plugin) => {
        if (plugin === 'keyboardnav') {
          importedPlugins.push(import('litepicker/dist/plugins/keyboardnav'));
        }

        if (plugin === 'mobilefriendly') {
          importedPlugins.push(
            import('litepicker/dist/plugins/mobilefriendly')
          );
        }

        if (plugin === 'ranges') {
          importedPlugins.push(import('litepicker/dist/plugins/ranges'));
        }

        if (plugin === 'multiselect') {
          importedPlugins.push(import('litepicker/dist/plugins/multiselect'));
        }
      });

      if (importedPlugins.length > 0) {
        Promise.all(importedPlugins).then(() => {
          this._initialize();
        });
      } else {
        this._initialize();
      }
    } else {
      this._initialize();
    }
  }

  _initialize() {
    this.picker = new Litepicker(this._options);

    if (
      this._options.registerAPI &&
      typeof this._options.registerAPI === 'function'
    ) {
      this._options.registerAPI(this.picker);
    }
  }

  willRemove() {
    this.picker.destroy();
  }
}
