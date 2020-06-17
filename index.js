'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/litepicker/dist/js/main.nocss.js');
    app.import('node_modules/litepicker/dist/css/style.css');
  },
};
