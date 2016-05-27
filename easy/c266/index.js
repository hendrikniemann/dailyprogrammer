import R from 'ramda';
import { Repeat } from 'immutable';

// incIndex :: List Number -> Number -> List Number
export const incIndex = R.curry((list, index) => list.update(index - 1, R.inc));

// default :: String -> String
export default R.pipe(
  R.split('\n'),
  R.chain(R.split(' ')),
  l => R.reduce(incIndex, Repeat(0, R.head(l)).toList(), R.tail(l)),
  R.addIndex(R.map)((val, index) => `Node ${index + 1} has a degree of ${val}`),
  R.join('\n')
);
