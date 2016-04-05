import R from 'ramda';

const mapIndexed = R.addIndex(R.map);

// isSumFifteen :: [Number] -> Boolean
export const isSumFifteen = R.pipe(R.sum, R.equals(15));

// isMagicSquare :: [[Number]] -> Boolean
const isMagicSquare = R.allPass([
  R.all(isSumFifteen),
  R.pipe(R.transpose, R.all(isSumFifteen)),
  R.pipe(mapIndexed((row, index) => row[index]), isSumFifteen),
  R.pipe(mapIndexed((row, index) => row[row.length - 1 - index]), isSumFifteen),
]);

export default isMagicSquare;
