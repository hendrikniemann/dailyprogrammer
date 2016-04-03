import test from 'ava';
import { contains } from 'ramda';

import { Tile, isPair, isSet, isSequence, isValid, groupSuits } from '.';

test('Tile', t => {
  const tile = Tile('TYPE', 12);

  t.true(tile.suit === 'TYPE');
  t.true(tile.number === 12);
});

test('isPair', t => {
  t.true(isPair([1, 1]));
  t.true(isPair([3, 3]));
  t.true(isPair([5, 5]));
  t.true(isPair([9, 9]));

  t.false(isPair([1, 9]));
  t.false(isPair([4, 7]));
  t.false(isPair([8, 9]));
});

test('isSequence', t => {
  t.true(isSequence([1, 2, 3]));
  t.true(isSequence([3, 4, 5]));
  t.true(isSequence([5, 6, 7]));
  t.true(isSequence([7, 8, 9]));

  t.false(isSequence([1, 3, 9]));
  t.false(isSequence([4, 5, 7]));
  t.false(isSequence([8, 9, 1]));
});

test('isSet', t => {
  t.true(isSet([1, 1, 1]));
  t.true(isSet([3, 3, 3]));
  t.true(isSet([5, 5, 5]));
  t.true(isSet([9, 9, 9]));

  t.false(isSet([1, 2, 3]));
  t.false(isSet([4, 4, 7]));
  t.false(isSet([1, 1, 4]));
});

test('isValid', t => {
  t.true(isValid([1, 1, 1, 3, 4, 5, 8, 8]));
  t.true(isValid([1, 1, 1, 2, 3, 8, 8, 8]));
  t.true(isValid([4, 5, 6, 1, 1]));
  t.true(isValid([1, 2, 3, 7, 8, 9]));
  t.true(isValid([2, 2, 2]));

  t.false(isValid([1, 3, 4, 5, 8, 8]));
});

test('groupSuits', t => {
  const tl = [Tile('a', 1), Tile('c', 1), Tile('b', 2), Tile('b', 3), Tile('a', 1), Tile('a', 1)];

  const res = groupSuits(tl);
  t.true(contains([1, 1, 1], res));
  t.true(contains([1], res));
  t.true(contains([2, 3], res));
});
