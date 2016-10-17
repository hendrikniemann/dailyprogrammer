import test from 'ava';

import { digits, ascDigits } from '.';

test('digits', (t) => {
  t.deepEqual(digits(1234), [1, 2, 3, 4]);
  t.deepEqual(digits(34), [0, 0, 3, 4]);
  t.deepEqual(digits(120), [0, 1, 2, 0]);
});

test('ascDigits', (t) => {
  t.true(ascDigits(1234) === 1234);
  t.true(ascDigits(3253) === 2335);
  t.true(ascDigits(9800) === 89);
  t.true(ascDigits(3333) === 3333);
  t.true(ascDigits(120) === 12);
});
