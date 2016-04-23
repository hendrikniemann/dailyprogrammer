import R from 'ramda';

export const count = (str, letter) => R.length(R.filter(R.equals(letter), R.split('', str)));

export const frequency = R.curry((str, letter) => count(str, letter) / str.length);

export const timesLog2 = x => x * Math.log2(x);

export default str => {
  const uni = R.uniq(str.split(''));
  return -R.sum(R.map(R.pipe(frequency(str), timesLog2), uni));
};
