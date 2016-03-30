import test from 'ava';

import challenge260 from '.';

// https://www.reddit.com/4cktc3
test('Challenge #260 [Intermediate] Diagonal collision', t => {
  t.true(challenge260(5, 2) === 6);
  t.true(challenge260(3, 9) === 9);
});

test('Challange Inputs', t => {
  t.true(challenge260(3, 9) === 9);
  t.true(challenge260(21, 2) === 22);
  t.true(challenge260(168, 189) === 336);
  t.true(challenge260(100, 101) === 200);
});
