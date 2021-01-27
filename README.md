# ember-litepicker

Ember addon for [Litepicker](https://github.com/wakirin/Litepicker/) date range picker library.

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

Please check [Litepicker](https://wakirin.github.io/Litepicker/) site for more configuration details.

```javascript
ENV['ember-litepicker'] = {
  elementEnd: null,
  parentEl: null,
  firstDay: 1,
  format: 'YYYY-MM-DD',
  lang: 'en-US',
  numberOfMonths: 1,
  numberOfColumns: 1,
  startDate: null,
  endDate: null,
  zIndex: 9999,

  minDate: null,
  maxDate: null,
  minDays: null,
  maxDays: null,
  selectForward: false,
  selectBackward: false,
  splitView: false,
  inlineMode: false,
  singleMode: true,
  autoApply: true,
  allowRepick: false,
  showWeekNumbers: false,
  showTooltip: true,
  hotelMode: false,
  disableWeekends: false,
  scrollToDate: true,
  mobileFriendly: true,

  lockDaysFormat: 'YYYY-MM-DD',
  lockDays: [],
  disallowLockDaysInRange: false,
  lockDaysInclusivity: '[]',

  bookedDaysFormat: 'YYYY-MM-DD',
  bookedDays: [],
  disallowBookedDaysInRange: false,
  bookedDaysInclusivity: '[]',
  anyBookedDaysAsCheckout: false,

  dropdowns: {
    minYear: 1990,
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
  },
  tooltipText: {
    one: 'day',
    other: 'days',
  },

  // Events
  onShow: null,
  onHide: null,
  onSelect: null,
  onError: null,
  onRender: null,
  onChangeMonth: null,
  onChangeYear: null,
  modules: ['ranges', 'navkeyboard'], // As of v2.1.0 you can dynamically import modules
};
```

Example as a component

```handlebars
<Litepicker @singleMode={{false}} @startDate="23.12.2019" @endDate="28.12.2019" autocomplete="off" />
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
