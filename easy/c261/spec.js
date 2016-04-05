import test from 'ava';

import challenge from '.';

// https://www.reddit.com/4dccix/
test('Challenge #261 [Easy] verifying 3x3 magic squares', t => {
  t.true(challenge([[8, 1, 6], [3, 5, 7], [4, 9, 2]]) === true);
  t.true(challenge([[2, 7, 6], [9, 5, 1], [4, 3, 8]]) === true);
  t.true(challenge([[3, 5, 7], [8, 1, 6], [4, 9, 2]]) === false);
  t.true(challenge([[8, 1, 6], [7, 5, 3], [4, 9, 2]]) === false);
});
