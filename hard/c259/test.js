import test from 'ava';

import { operate } from '.';

test('operate', t => {
  t.true(operate('0', 3, 4) === 3 + 4);
  t.true(operate('1', 21, 90) === 21 - 90);
  t.true(operate('2', 234, 7) === 234 * 7);
});
