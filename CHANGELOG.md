# Changelog

All notable changes will be documented in this file.

[5.0.0] - 2022-05-03
- converted to a V2 format addon
- Breaking: Updated to ember-modifiers 3.3.x. This causes modifiers to be called lazily and could have an impact on usage. see [ember-modifier migration](https://github.com/ember-modifier/ember-modifier/blob/master/MIGRATIONS.md#40)

[4.2.0] - 2021-09-05
- ember-cli upgraded to v3.28

Compatibility is now;

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above

[4.0.0] - 2021-05-14

- ember-auto-import upgraded to v2.0
- for use this version you must upgrade your apps `ember-auto-import` version at least v2.0 now and add webpack to app dev dependencies
  (`yarn add --dev webpack@5` or `npm install --save-dev webpack@5`)

[3.0.25] - 2021-03-24

- Block syntax added - yields nothing

[3.0.1] - 2021-02-05

- Litepicker version updated to 2.0.3 (https://github.com/wakirin/Litepicker/releases/tag/2.0.3)
- Plugin added - multiselect

[3.0.0] - 2021-02-01

- Litepicker version updated to 2.0.0 (https://github.com/wakirin/Litepicker/releases/tag/2.0.0)
- Plugins added - keyboardnav, mobilefriendly, ranges
