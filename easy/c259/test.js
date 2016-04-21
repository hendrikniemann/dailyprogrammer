import test from 'ava';
import { getPos, getDist, transitions, addPair } from './index';

test('getPos', t => {
  t.deepEqual(getPos('1'), [0, 0]);
  t.deepEqual(getPos('2'), [0, 1]);
  t.deepEqual(getPos('3'), [0, 2]);
  t.deepEqual(getPos('4'), [1, 0]);
  t.deepEqual(getPos('5'), [1, 1]);
  t.deepEqual(getPos('6'), [1, 2]);
  t.deepEqual(getPos('7'), [2, 0]);
  t.deepEqual(getPos('8'), [2, 1]);
  t.deepEqual(getPos('9'), [2, 2]);
  t.deepEqual(getPos('.'), [3, 0]);
  t.deepEqual(getPos('0'), [3, 1]);
});

test('getDist', t => {
  t.true(getDist([0, 1], [0, 0]) === 1);
  t.true(getDist([0, 1], [0, 1]) === 0);
  t.true(getDist([0, 1], [1, 1]) === 1);
  t.true(getDist([2, 1], [1, 1]) === 1);
  t.true(getDist([2, 2], [1, 1]) === Math.sqrt(2));
});

test('addPair', t => {
  t.deepEqual(addPair([[1, 2]], 3), [[1, 2], [2, 3]]);
  t.deepEqual(addPair([[1, 2], [2, 7]], 3), [[1, 2], [2, 7], [7, 3]]);
});

test('transitions', t => {
  t.deepEqual(transitions([1, 2, 3, 4]), [[1, 2], [2, 3], [3, 4]]);
  t.deepEqual(transitions(['a', 'c', 'd']), [['a', 'c'], ['c', 'd']]);
});
