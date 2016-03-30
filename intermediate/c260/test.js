import test from 'ava';

import {
  isNatural,
  horizontalNeighbours as hN,
  verticalNeighbours as vN,
} from '.';

test('isNatural', t => {
  t.true(isNatural(1));
  t.true(isNatural(387546));
  t.false(isNatural(1.928));
  t.false(isNatural(0.1));
});

test('verticalNeighbours', t => {
  let res = vN([0.5, 1]);

  t.same(res[0], [0, 0]);
  t.same(res[1], [0, 1]);

  res = vN([2, 2]);

  t.same(res[0], [1, 1]);
  t.same(res[1], [2, 2]);
});

test('horizontalNeighbours', t => {
  let res = hN([2, 4.5]);

  t.same(res[0], [1, 4]);
  t.same(res[1], [2, 4]);

  res = hN([2, 2]);

  t.same(res[0], [1, 1]);
  t.same(res[1], [2, 2]);
});
