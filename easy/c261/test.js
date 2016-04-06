import test from 'ava';

import { isSumFifteen, missingLine, isPotetialMagicSquare } from '.';

test('isSumFifteen', t => {
  t.true(isSumFifteen([2, 4, 9]));
  t.false(isSumFifteen([4, 7, 1]));
});

test('missingLine', t => {
  t.same(missingLine([[8, 1, 6], [3, 5, 7]]), [4, 9, 2]);
  t.same(missingLine([[2, 7, 6], [8, 4, 3]]), [5, 4, 6]);
});

test('isPotetialMagicSquare', t => {
  t.true(isPotetialMagicSquare([[8, 1, 6], [3, 5, 7]]));
  t.false(isPotetialMagicSquare([[2, 7, 6], [8, 4, 3]]));
});
