import R from 'ramda';

export const isNatural = num => num === Math.floor(num);

// verticalNeighbours :: (Number, Number) -> [(Number, Number)]
export const verticalNeighbours = R.ifElse(
  R.pipe(R.head, isNatural),
  ([x, y]) => [[x - 1, y - 1], [x, y]],
  ([x, y]) => [[Math.floor(x), y - 1], [Math.floor(x), y]]
);

// horizontalNeighbours :: (Number, Number) -> [(Number, Number)]
export const horizontalNeighbours = R.ifElse(
  R.pipe(R.last, isNatural),
  ([x, y]) => [[x - 1, y - 1], [x, y]],
  ([x, y]) => [[x - 1, Math.floor(y)], [x, Math.floor(y)]]
);

// solve :: Number -> Number -> Number
const solve = R.curry((width, height) => {
  // getX :: Number -> (Number, Number)
  const getX = y => [y / height * width, y];

  // getY :: Number -> (Number, Number)
  const getY = x => [x, x / width * height];

  return R.length(R.union(
    R.chain(horizontalNeighbours, R.map(getY, R.range(1, width))),
    R.chain(verticalNeighbours, R.map(getX, R.range(1, height)))
  ));
});

export default solve;
