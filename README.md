# ember-litepicker

![npm](https://img.shields.io/npm/v/ember-litepicker)
![npm-dl](https://img.shields.io/npm/dm/ember-litepicker)
![CI](https://github.com/sinankeskin/ember-litepicker/workflows/CI/badge.svg)

Ember addon for [Litepicker](https://litepicker.com/) date range picker library.

![SS](https://github.com/sinankeskin/ember-litepicker/blob/main/ss.png?raw=true)

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-litepicker
```

## Usage

You can change all global configuration settings via `config/environment.js` file.

Please check [Litepicker](https://litepicker.com/) site for more configuration details.

```javascript
ENV['ember-litepicker'] = {
  element: null,
  elementEnd: null,
  parentEl: null,
  firstDay: 1,
  format: 'YYYY-MM-DD',
  lang: 'en-US',
  delimiter: ' - ',
  numberOfMonths: 1,
  numberOfColumns: 1,
  startDate: null,
  endDate: null,
  zIndex: 9999,

  selectForward: false,
  selectBackward: false,
  splitView: false,
  inlineMode: false,
  singleMode: true,
  autoApply: true,
  allowRepick: false,
  showWeekNumbers: false,
  showTooltip: true,
  scrollToDate: true,
  mobileFriendly: true,
  resetButton: false,
  autoRefresh: false,

  lockDaysFormat: 'YYYY-MM-DD',
  lockDays: [],
  disallowLockDaysInRange: false,
  lockDaysInclusivity: '[]',

  highlightedDaysFormat: 'YYYY-MM-DD',
  highlightedDays: [],

  dropdowns: {
    minYear: 1990,
    // tslint:disable-next-line: object-literal-sort-keys
    maxYear: null,
    months: false,
    years: false,
  },

  buttonText: {
    apply: 'Apply',
    cancel: 'Cancel',
    previousMonth:
      '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
    nextMonth:
      '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
    reset: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
      </svg>`,
  },
  tooltipText: {
    one: 'day',
    other: 'days',
  },

  // Events
  onBeforeClick,
  onBeforeRender,
  onBeforeShow,
  onButtonApply,
  onButtonCancel,
  onChangeMonth,
  onChangeYear,
  onClearSelection,
  onPreselect,
  onSelected,
  onRender,
  onRenderDay,
  onRenderFooter,
  onRenderMonth,
  onShow,
  onHide,
  onTooltip,
  onErrorRange,
  onDestroy,

  plugins: ['keyboardnav', 'mobilefriendly', 'ranges', 'multiselect'], // As of v2.1.0 you can dynamically import modules, as of v3.0.0 property name changed to plugins
};
```

Example as a component

```handlebars
<Litepicker @singleMode={{false}} @startDate="23.12.2019" @endDate="28.12.2019" autocomplete="off" />
```

```handlebars
<Litepicker @singleMode={{false}} @startDate="23.12.2019" @endDate="28.12.2019" autocomplete="off">
  <div>
    Date Time: {{@dateTime}}
  </div>
</Litepicker>
```

Example as a modifer

```handlebars
<Input {{litepicker singleMode=false startDate="23.12.2019" endDate="28.12.2019" autocomplete="off"}} />
```

If you would like access to the litepicker instance in order to call some methods directly, for example to hide or show
programmatically, pass an action to registerAPI

```handlebars
<Input {{litepicker registerApi=this.saveApi startDate="23.12.2019" endDate="28.12.2019" autocomplete="off"}} />
```

```javascript
// save the litepicker instance to use later
@action
saveApi(litepicker) {
  this.litepicker = litepicker;
}

// programmatically open the datepicker
@action
openDatePicker() {
  this.litepicker.show();
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
