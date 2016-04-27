import test from 'ava';

import { operate, makeVars } from '.';

test('operate', t => {
  t.true(operate('0', 3, 4) === 3 + 4);
  t.true(operate('1', 21, 90) === 21 - 90);
  t.true(operate('2', 234, 7) === 234 * 7);
});

test('variations', t => {
  const varis = makeVars(7);

  for (let i = 0; i < varis.length; i++) {
    //console.log(i + ':' + varis[i]);
  }
});
