import test from 'ava';

import challenge from '.';

// https://www.reddit.com/4gqm90/
test('Challenge #264 [Intermediate]', t => {
  const example1 = [[3, 1, 2, 3], [3, 2, 3, 1], [4, 2, 3, 4, 5]];
  const example2 = [[2, 1, 2], [5, 2, 8]];

  t.true(challenge(example1) === 5);
  t.true(challenge(example2) === 'never');
});
