import R from 'ramda';

export const types = {
  BAMBOO: "Bamboo",
  CIRCLE: "Circle",
  CHARACTER: "Character",
};

const Tile = (type, number) => ({ type, number });

// makeTile :: String -> Tile
export const makeTile = R.pipe(R.split(','), R.apply(Tile));

//
export const group = R.pipe(R.groupBy(R.prop('type')), R.map(R.prop(number)));

// solve :: [Tile] -> Boolean
const solve = tiles => false;

// formatSolve :: String -> String
const formatSolve = R.pipe(
  R.split('\n'),
  R.map(makeTile),
  solve,
  R.ifElse(R.identity, R.always('Winning hand'), R.always('Not a winning hand'))
)

export default solve;
