import test from 'ava';

import challenge, { readNos } from '.';

test('Challenge #259 [Hard] Diagonal collision', t => {
  t.true(readNos('10020') === 21);
  console.log(challenge(7));
});
