import R from 'ramda';

// count :: String -> String -> Number
export const count = (str, letter) => R.length(R.filter(R.equals(letter), R.split('', str)));

// frequency :: String -> String -> Number
export const frequency = R.curry((str, letter) => count(str, letter) / str.length);

// timesLog2 :: Number -> Number
export const timesLog2 = x => x * Math.log2(x);

// solve :: String -> Number
export default str => -R.sum(R.map(R.pipe(frequency(str), timesLog2), R.uniq(str.split(''))));
