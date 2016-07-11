'use strict';

/**
 * radio Input Plugin
 *
 *
 * A plugin for multiple radio buttons
 */
const validation = require('./lib/validation.js');

/**
 * Single radio Input Plugin
 * @module radioInputPlugin
 */
module.exports = {
  name: 'radio',
  description: 'A plugin for multiple radio buttons',
  validation: {
    radioValidation: validation,
  },
  inputs: {
    radio: {
      validation: {
        function: 'radioValidation',
        on: 'change',
      },
      type: 'radio',
      label: 'radio',
      options: [
        { label: 'red',
          value: 'red',
        },
        { label: 'blue',
          value: 'blue',
        },
        { label: 'green',
          value: 'green',
        },
        { label: 'yellow',
          value: 'yellow',
        },
      ],
      settings: {
        empty: false,
      },
    },
  },
  html: '{% for option in radio.options %}<label for="{{radio.id}}--{{loop.index}}"><input type="{{radio.type}}" name="{{radio.name}}" id="{{radio.id}}--{{loop.index}}" value="{{option.value}}" {% if option.value == radio.value %}checked{% endif %}>{{option.label}}</label>{% endfor %}',
};
