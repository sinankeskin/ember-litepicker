'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    autoImport: {
      alias: {
        'litepicker/dist/plugins/keyboardnav':
          'litepicker/dist/plugins/keyboardnav',
        'litepicker/dist/plugins/mobilefriendly':
          'litepicker/dist/plugins/mobilefriendly',
        'litepicker/dist/plugins/ranges': 'litepicker/dist/plugins/ranges',
        'litepicker/dist/plugins/multiselect':
          'litepicker/dist/plugins/multiselect',
      },
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },
};
