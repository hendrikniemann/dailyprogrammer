import test from 'ava';
import {
  matchYear,
  orElse,
  getYearFromDate,
  toLifespan,
  isInSpan,
} from '.';

test('matchYear', t => {
  t.true(matchYear('Oct 14 1890') === '1890');
  t.true(matchYear('') === null);
});

test('orElse', t => {
  const x = Symbol('x');
  const y = Symbol('y');
  t.true(orElse(x)(null) === x);
  t.true(orElse(x)(y) === y);
});

test('getYearFromDate', t => {
  t.true(getYearFromDate('Oct 14 1890') === 1890);
  t.true(getYearFromDate('') === (new Date).getFullYear());
});

test('toLifespan', t => {
  const president = { PRESIDENT: 'x', 'BIRTH DATE': 'Nov 23 1940', 'DEATH DATE': 'Jul 17 1998' };
  t.deepEqual(toLifespan(president), [1940, 1998]);
});

test('isInSpan', t => {
  t.true(isInSpan([1, 3])(1));
  t.true(isInSpan([1, 3])(2));
  t.true(isInSpan([1, 3])(3));
  t.false(isInSpan([1, 3])(0));
  t.false(isInSpan([1, 3])(4));
});
