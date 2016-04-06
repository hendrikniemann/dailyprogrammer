import R from 'ramda';

const mapIndexed = R.addIndex(R.map);

// isSumFifteen :: [Number] -> Boolean
export const isSumFifteen = R.pipe(R.sum, R.equals(15));

// isMagicSquare :: [[Number]] -> Boolean
export const isMagicSquare = R.allPass([
  R.all(isSumFifteen),
  R.pipe(R.transpose, R.all(isSumFifteen)),
  R.pipe(mapIndexed((row, index) => row[index]), isSumFifteen),
  R.pipe(mapIndexed((row, index) => row[row.length - 1 - index]), isSumFifteen),
]);

// missingLine :: [[Number]] -> [Number]
export const missingLine = R.pipe(R.transpose, R.map(R.pipe(R.sum, R.subtract(15))));

// isPotetialMagicSquare :: [[Number]] -> Boolean
export const isPotetialMagicSquare = square => isMagicSquare(R.append(missingLine(square), square));

// solve :: [[Number]] -> Boolean
const solve = R.ifElse(R.pipe(R.length, R.equals(3)), isMagicSquare, isPotetialMagicSquare);

export default solve;
