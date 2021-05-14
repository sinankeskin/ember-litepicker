'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    autoImport: {
      alias: {
        keyboardnav$: 'litepicker/dist/plugins/keyboardnav',
        mobilefriendly$: 'litepicker/dist/plugins/mobilefriendly',
        ranges$: 'litepicker/dist/plugins/ranges',
        multiselect$: 'litepicker/dist/plugins/multiselect',
      },
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/litepicker/dist/litepicker.js');
  },
};
