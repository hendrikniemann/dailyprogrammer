import test from 'ava';
import challenge from './index';

// https://www.reddit.com/4bc3el
test('Challenge #259 [EASY] Clarence the Slow Typist', t => {
  t.true(challenge('219.45.143.143') === '27.38cm');
});
