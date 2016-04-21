import test from 'ava';
import challenge260 from './index';

const click = 'button_clicked';
const cycle = 'cycle_complete';

// https://www.reddit.com/4cb7eh
test('Challenge #260 [EASY] Garage Door Opener', t => {
  const example = [click, cycle, click, click, click, click, click, cycle];
  const results = [
    'OPENING', 'OPEN', 'CLOSING', 'STOPPED_WHILE_CLOSING', 'OPENING',
    'STOPPED_WHILE_OPENING', 'CLOSING', 'CLOSED',
  ];

  results.forEach((res, index) => {
    t.true(challenge260(example.slice(0, index + 1).join('\n')) === res);
  });
});
