import test from 'ava';

import { endsWith } from '.';

test('endsWith', t => {
  t.true(endsWith(3, 103));
  t.true(endsWith(7, 7));
  t.true(endsWith(5, 1893745));
  t.false(endsWith(7, 1893740));
  t.false(endsWith(1, 0));
});
