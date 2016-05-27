import test from 'ava';
import { is, List } from 'immutable';

import { incIndex } from '.';

test('incIndex', t => {
  t.true(is(
    incIndex(List.of(1, 1, 1, 1), 2),
    List.of(1, 2, 1, 1)
  ), 'increase the index');
});
