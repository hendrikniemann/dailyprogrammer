import test from 'ava';

import challenge, { readNos } from '.';

test('Challenge #259 [Hard] Diagonal collision', t => {
  t.true(readNos('10020') === 21);
  const res = challenge(7);

  t.true(res[21] === '10020');
});
