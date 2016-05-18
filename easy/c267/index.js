import R from 'ramda';

// endsWith :: Number -> Number -> Boolean
export const endsWith = R.curry((end, num) => num % 10 === end);

// isNot :: a -> a -> Boolean
export const isNot = R.curry((a, b) => a !== b);

// makeNth :: Number -> String
export const makeNth = R.cond([
  [R.both(endsWith(1), isNot(11)), x => `${x}st`],
  [R.both(endsWith(2), isNot(12)), x => `${x}nd`],
  [R.both(endsWith(3), isNot(13)), x => `${x}rd`],
  [R.T, x => `${x}th`],
]);

// default :: Number -> Number -> String
export default (place, end = 100) => R.pipe(
  R.filter(isNot(place)),
  R.map(makeNth),
  R.join(', ')
)(R.range(1, end + 1));
