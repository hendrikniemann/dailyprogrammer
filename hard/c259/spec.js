import test from 'ava';

import challenge, { readNos } from '.';

// https://www.reddit.com/4bwibm/
test('Challenge #259 [Hard] Operator number system', t => {
  t.true(readNos('10020') === 21);
  const res = challenge(7);

  t.true(res[21] === '10020');
});
