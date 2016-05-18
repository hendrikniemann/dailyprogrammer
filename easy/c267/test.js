import test from 'ava';

import { endsWith, makeNth, isNot } from '.';

test('isNot', t => {
  t.true(isNot(1)(2));
  t.false(isNot(2)(2));
});

test('endsWith', t => {
  t.true(endsWith(3, 103));
  t.true(endsWith(7, 7));
  t.true(endsWith(5, 1893745));
  t.false(endsWith(7, 1893740));
  t.false(endsWith(1, 0));
});

test('makeNth', t => {
  t.true(makeNth(1) === '1st');
  t.true(makeNth(2) === '2nd');
  t.true(makeNth(3) === '3rd');
  t.true(makeNth(4) === '4th');
  t.true(makeNth(11) === '11th');
  t.true(makeNth(12) === '12th');
  t.true(makeNth(13) === '13th');
  t.true(makeNth(101) === '101st');
  t.true(makeNth(672) === '672nd');
  t.true(makeNth(8490563) === '8490563rd');
});
