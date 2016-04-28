import R from 'ramda';

const mapI = R.addIndex(R.map);

const zeroLens = R.lensIndex(0);

// route :: [Number] -> Number -> Number
export const route = R.curry((track, n) => track[n % track.length]);

// makeDriver :: [Number] -> Number -> ([Number], (Number -> Number))
export const makeDriver = R.curry((track, id) => [[id], route(track)]);

// gossip :: [([Number], (Number -> Number))] -> [([Number], (Number -> Number))]
export const gossip = drivers =>
  R.map(R.set(zeroLens, R.reduce(R.union, R.map(zeroLens, drivers))), drivers);

// groupByStop :: [([Number], (Number -> Number))] -> [[([Number], (Number -> Number))]]
export const groupByStop = R.curry((n, drivers) => R.groupBy(([_, r]) => r(n), drivers));

// solve :: [[Number]] -> Maybe Number
const solve = tracks => {
  const drivers = mapI(makeDriver, tracks);
  console.log(groupByStop(0, drivers));
};

solve([[1, 2, 3], [1, 3, 4], [2, 3, 8]]);

export default solve;
