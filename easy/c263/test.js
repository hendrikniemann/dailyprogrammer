import test from 'ava';
import { count, frequency, timesLog2 } from '.';

test('count', t => {
  t.true(count('aaba', 'a') === 3);
  t.true(count('aaba', 'c') === 0);
  t.true(count('adaba', 'd') === 1);
});

test('frequency', t => {
  t.true(frequency('aaba', 'a') === 3 / 4);
  t.true(frequency('aaba', 'c') === 0);
  t.true(frequency('adaba', 'd') === 1 / 5);
});

test('timesLog2', t => {
  t.true(timesLog2(4) === 8);
});
