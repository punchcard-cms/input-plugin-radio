import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'radio',
    value: 'foo bar baz',
  },
  all: {
    radio: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    radio: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

