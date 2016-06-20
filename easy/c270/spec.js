import test from 'ava';

import challenge from '.';

// https://www.reddit.com/4msu2x/
test('Challenge #270 [Easy] Transpose the input text', t => {
  // Some
  // text.
  const input = [['S', 'o', 'm', 'e', ' '], ['t', 'e', 'x', 't', '.']];
  const output = [['S', 't'], ['o', 'e'], ['m', 'x'], ['e', 't'], [' ', '.']];
  t.deepEqual(challenge(input), output);
});
