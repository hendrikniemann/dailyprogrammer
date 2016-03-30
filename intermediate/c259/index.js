import R from 'ramda';

// Tile :: String -> Number -> Tile
export const Tile = (suit, number) => ({ suit, number: parseInt(number, 10) });

// isSet :: (Number, Number, Number) -> Boolean
export const isSet = tripel => tripel[0] === tripel[1] && tripel[0] === tripel[2];

// isPair :: (Number, Number) -> Boolean
export const isPair = R.apply(R.equals);

// isSequence :: (Number, Number, Number) -> Boolean
export const isSequence = tripel => tripel[0] + 1 === tripel[1] && tripel[0] + 2 === tripel[2];

// isValid :: [Number] -> Boolean
export const isValid = list => {
  const validTail = drop => R.pipe(R.drop(drop), R.ifElse(R.isEmpty, R.T, isValid));

  return R.cond([
    [R.pipe(R.take(3), isSequence), validTail(3)],
    [R.pipe(R.take(3), isSet), R.either(validTail(3), validTail(2))],
    [R.pipe(R.take(2), isPair), validTail(2)],
    [R.T, R.always(false)],
  ])(list);
};

// makeTile :: String -> Tile
export const makeTile = R.pipe(R.split(','), R.apply(Tile));

// group :: [Tile] -> [[Number]]
export const groupSuits = R.pipe(
  R.groupBy(R.prop('suit')),
  R.values,
  R.map(R.pipe(R.map(R.prop('number')), R.sort(R.substract)))
);

// solve :: [Tile] -> Boolean
export const solve = R.pipe(groupSuits, R.all(isValid));

// formatSolve :: String -> String
const formatSolve = R.pipe(
  R.split('\n'),
  R.tail,
  R.map(makeTile),
  solve,
  R.ifElse(R.identity, R.always('Winning hand'), R.always('Not a winning hand'))
);

export default formatSolve;
