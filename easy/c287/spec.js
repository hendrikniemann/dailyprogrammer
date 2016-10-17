import test from 'ava';

import { largestDigit, descDigits, kaprekar } from '.';

// https://www.reddit.com/56tbds
test('Challenge #287 [Easy] largest_digits', (t) => {
  t.true(largestDigit(1234) === 4);
  t.true(largestDigit(3253) === 5);
  t.true(largestDigit(9800) === 9);
  t.true(largestDigit(3333) === 3);
  t.true(largestDigit(120) === 2);
});

test('Challenge #287 [Easy] Bonus 1: desc_digits', (t) => {
  t.true(descDigits(1234) === 4321);
  t.true(descDigits(3253) === 5332);
  t.true(descDigits(9800) === 9800);
  t.true(descDigits(3333) === 3333);
  t.true(descDigits(120) === 2100);
});

test('Challenge #287 [Easy] Bonus 2: kaprekar', (t) => {
  t.true(kaprekar(6174) === 0);
  t.true(kaprekar(6589) === 2);
  t.true(kaprekar(5455) === 5);
});
