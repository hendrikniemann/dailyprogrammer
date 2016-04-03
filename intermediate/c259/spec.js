import test from 'ava';

import challenge259 from '.';

// https://www.reddit.com/4bmdwz
test('Challenge #259 [Intermediate] Mahjong Hands', t => {
  let input;
  input = `14
Circle,4\nCircle,5\nCircle,6\nBamboo,1\nBamboo,2\nBamboo,3\nCharacter,2
Character,2\nCharacter,2\nCircle,1\nCircle,1\nBamboo,7\nBamboo,8\nBamboo,9`;

  t.true(challenge259(input) === 'Winning hand', 'First example input');

  input = `14
Circle,4\nBamboo,1\nCircle,5\nBamboo,2\nCharacter,2\nBamboo,3\nCharacter,2\nCircle,6\nCharacter,2
Circle,1\nBamboo,8\nCircle,1\nBamboo,7\nBamboo,9`;

  t.true(challenge259(input) === 'Winning hand', 'Second example input');

  input = `14
Circle,4\nCircle,5\nCircle,6\nCircle,4\nCircle,5\nCircle,6\nCircle,1\nCircle,1\nBamboo,7\nBamboo,8
Bamboo,9\nCircle,4\nCircle,5\nCircle,6`;

  t.true(challenge259(input) === 'Winning hand', 'Third example input');
});
