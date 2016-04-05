import test from 'ava';

import { isSumFifteen } from '.';

test('isSumFifteen', t => {
  t.true(isSumFifteen([2, 4, 9]) === true);
  t.true(isSumFifteen([4, 7, 1]) === false);
});
