import R from 'ramda';
import L from 'lodash/fp';

export const digits = R.pipe(
  R.toString,
  L.padCharsStart('0', 4),
  R.split(''),
  R.map(L.parseInt(10))
);

export const largestDigit = R.pipe(digits, L.max);

export const descDigits = R.pipe(digits, R.sort(R.flip(R.subtract)), R.join(''), L.parseInt(10));

export const ascDigits = R.pipe(digits, R.sort(R.subtract), R.join(''), L.parseInt(10));

export const kaprekar = (n) => {
  function recursiveKaprekar(iterations, number) {
    if (number === 6174) return iterations;
    return recursiveKaprekar(iterations + 1, descDigits(number) - ascDigits(number));
  }
  return recursiveKaprekar(0, n);
};
