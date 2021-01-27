'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    autoImport: {
      alias: {
        litepicker: 'litepicker/dist/js/main',
        ranges: 'litepicker-module-ranges/dist/index',
        navkeyboard: 'litepicker-module-navkeyboard/dist/index',
      },
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },
};
