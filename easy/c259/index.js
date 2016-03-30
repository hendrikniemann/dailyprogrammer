import R from 'ramda';
import { round } from 'lodash';

// getPos :: String -> (Number, Number)
export const getPos = R.pipe(
  R.indexOf(R.__, '123456789.0'.split('')),
  index => [Math.floor(index / 3), index % 3]
);

// getDist :: (Number, Number) -> (Number, Number) -> Number
export const getDist = R.curry((start, target) => Math.sqrt(
  Math.pow(start[0] - target[0], 2) + Math.pow(start[1] - target[1], 2)
));

// addPair :: [(Any, Any)] -> Any -> [(Any, Any)]
export const addPair = (p, n) => [...p, [R.last(R.last(p)), n]];

// transitions :: [Any] -> [(Any, Any)]
export const transitions = arr => R.reduce(
  addPair,
  R.of(R.take(2, arr)),
  R.takeLast(arr.length - 2, arr)
);

// solve :: [String] -> Number
const solve = R.pipe(R.map(getPos), transitions, R.map(R.apply(getDist)), R.sum);

// formatSolve :: String -> String
const formatSolve = R.pipe(R.split(''), solve, x => round(x, 2), R.toString, R.concat(R.__, 'cm'));

export default formatSolve;
